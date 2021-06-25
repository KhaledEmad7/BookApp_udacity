import React, {useEffect} from 'react'
import * as BooksAPI from '../utils/BooksAPI'
import '../styles/App.css'
import { Link, Route } from "react-router-dom";
import BooksList from './BooksList'
import SearchBar from './SearchBar'

class BooksApp extends React.Component {
  state = {
    books : []
  }

  componentDidMount(){
    this.updateBooks()
  }
  async updateBooks(){
    const books = await BooksAPI.getAll();
    this.setState({ books });
  }
  change = (id, shelf, e) =>{
    BooksAPI.update({id: id}, e.target.value).then(res => {
        this.updateBooks();
      })
  }


  render() {
    return (
      <div className="app">

        <Route path = '/search' render = { () => (
          <SearchBar booksOnShelves = {this.state.books} change = {this.change} />
        )}></Route>
        <Route exact path = '/' render = {() => (
          <div className="list-books">
            <div className="list-books-title">
              <h1>My Library</h1>
            </div>

            <div className="list-books-content">
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Currently Reading</h2>
                  <BooksList books = {this.state.books.filter((book) => 
                    book.shelf === "currentlyReading"
                  )}
                  change = {this.change}/>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Want to Read</h2>
                  <BooksList books = {this.state.books.filter((book) => 
                    book.shelf === "wantToRead"
                  )}
                  change = {this.change}/>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Read</h2>
                  <BooksList books = {this.state.books.filter((book) => 
                    book.shelf === "read"
                  )}
                  change = {this.change}/>
                </div>
            </div>
            <div className="open-search">
              <Link to = '/search' >
                <button>Add a book</button>
              </Link>
            </div>
          </div>
        )}></Route>
      </div>
    )
  }
}

export default BooksApp
