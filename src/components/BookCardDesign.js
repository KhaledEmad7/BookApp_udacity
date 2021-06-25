import React, {Component} from 'react'
import PropTypes from 'prop-types'

class BookCardDesign extends Component{
  static propTypes = {
    shelf: PropTypes.string.isRequired,
    change: PropTypes.func.isRequired,
    title: PropTypes.string,
    authors: PropTypes.array,
    imageLink: PropTypes.string.isRequired
  }
    render()
    {
        return (
            <li>
                <div className="book">
                  <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage:`url(${this.props.imageLink})` }}></div>
                    <div className="book-shelf-changer">
                      <select value = {this.props.shelf} onChange = {(e) => (this.props.change(this.props.id, this.props.shelf, e))}>
                        <option value="move" disabled>Move to...</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                      </select>
                    </div>
                  </div>
                  <div className="book-title">{this.props.title}</div>
                  <div className="book-authors">{this.props.authors}</div>
                </div>
            </li>
        )
    }
}

export default BookCardDesign;