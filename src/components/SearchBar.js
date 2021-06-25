import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import BooksList from './BooksList'
import * as BooksAPI from '../utils/BooksAPI'
import PropTypes from 'prop-types'

class SearchBar extends Component{
    static propTypes = {
        currentBooks: PropTypes.array,
        change: PropTypes.func
    }
    state = {
        query:'',
        books : [],
        searchErr: false
    }
    updateQuery = (event) => {
        this.setState(() => ({
          event: event
        }))
        this.getRequiredBooks(event);
    }

    getRequiredBooks = event =>{
        BooksAPI.search(event).then(obj => {
            if(!obj['error']){
                for(let element in obj){
                    obj[element].shelf = 'none'
                    for(let currentBooks in this.props.currentBooks){
                        if(this.props.currentBooks[currentBooks].id === obj[element].id){
                            obj[element].shelf = this.props.currentBooks[currentBooks].shelf
                            break;
                        }
                    }
                }
                this.setState(() => ({
                    books : obj
                }))
            }
            //If search is not available
            else{
                this.setState(() => ({
                    books : []
                }))
            }
        //Handeling the same problem If search is not available
        }).catch((err) => {
            this.setState(() => ({
                books : []
                }))}
            )
    }
    change = (id, shelf, e) =>{
        const {target} = e;
        this.props.change(id, shelf, e);
        this.setState((currentState) => {
            currentState.books.map(book => {
                if(book.id === id){
                    book.shelf = target.value;
                }
                return book;
            })
        } );
    }
    render(){
        const { event } = this.state
        return (
            <div className="search-books">
            <div className="search-books-bar">
                <Link  to = "/">
                    <button className="close-search">Close</button>
                </Link>
              <div className="search-books-input-wrapper">
                <input type="text" placeholder="Search by title or author" value = 
                {event} onChange = {
                        (event) => this.updateQuery(event.target.value)
                    }/>

              </div>
            </div>
            <div className="search-books-results">
              <BooksList books = {this.state.books} change = {this.change}></BooksList>
            </div>
          </div>
        )
    }
}

export default SearchBar