import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link, useParams } from 'react-router-dom'
import Rating from '../components/ui/Rating'
import Price from '../components/ui/Price'
import Book from '../components/ui/Book'


const BookInfo = ({books, addToCart, cart}) => {
    const {id }=useParams();
    const book = books.find(book => book.id === +id) //the plus converts the string to a number, because params returns it in a string
    function addBookToCart(book) {
        addToCart(book)
    }
    function bookExistsInCart() {
        return cart.find(book => book.id === +id)
    }
    return (
        <div id="books__body">
            <main id="books__main">
                <div className="books__container">
                    <div className="row">
                        <div className="book__selected--top">
                            <Link to="/books" className="book__link">
                                <FontAwesomeIcon icon="arrow-left"/>
                            </Link>
                            <Link to="/books" className="book__link">
                            <h2 className="book__selected--title--top">Books</h2>
                            </Link>
                        </div>
                        <div className="book__selected">
                            <figure className="book__selected--figure">
                                <img src={book.url} alt="" className="book__selected--img"></img>
                            </figure>
                            <div className="book__selected--description">
                                <h2 className="book__selected--title">{book.title}</h2>
                                <Rating rating={book.rating} />
                                <div className="book__selected--price">
                                    <Price originalPrice={book.originalPrice} salePrice={book.salePrice} />
                                </div>
                                <div className="book__summary">
                                    <div className="book__summary--title">
                                        Summary
                                    </div>
                                    <p className="book__summary--para">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum quis ea eius dicta necessitatibus accusantium error, excepturi beatae veniam numquam.
                                    </p>
                                    <p className="book__summary--para">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum quis ea eius dicta necessitatibus accusantium error, excepturi beatae veniam numquam.
                                    </p>
                                </div>
                              {
                                bookExistsInCart() ? (
                              <Link to="/cart"><button className="btn">Checkout</button>
                              </Link>
                                    
                                ) : (
                                <button className="btn" onClick={() => addBookToCart(book)}>Add to Cart</button>
                                )

                              }
                            
                                
                            </div>
                        </div>
                    </div>
                </div>

                <div className="books__container">
                    <div className="row">
                        <div className="book__selected--top">
                            <h2 className="book__selected--title--top">
                            Recommended Books
                            </h2>
                        </div>
                        <div className="books">
                        {
                            books
                            .filter(book => book.rating === 5 && book.id !== +id)
                            .map(book => <Book book={book} key={book.id} />)
                            .slice(0, 4)
                        }
                    </div>
                    </div>
                </div>

            </main>
        </div>
    )
}
export default BookInfo