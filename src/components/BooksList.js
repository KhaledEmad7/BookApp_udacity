import React, {Component} from 'react'
import PropTypes from 'prop-types'
import BookCardDesign from './BookCardDesign'
class BooksList extends Component {
    render(){
        return (
            <div className="bookshelf-books">
            <ol className="books-grid">
              {this.props.books.map((book) => (<BookCardDesign key = {book.id} 
                        imageLink = {book.imageLinks.thumbnail} 
                        title = {book.title} 
                        authors = {Array.isArray(book.authors) ? book.authors : []} 
                        shelf = {book.shelf}
                        id = {book.id}
                        change = {this.props.change} />)
                  )
              }
            </ol>
          </div>
        )
    }
}

export default BooksList;