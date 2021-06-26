import React, {Component} from 'react'
import PropTypes from 'prop-types'

const BookCardDesign = props => {
  const { shelf, change, title, authors, imageLink, id } = props;


  return (
      <li>
          <div className="book">
            <div className="book-top">
              <div className="book-cover" style={{ width: 128, height: 193, backgroundImage:`url(${imageLink})` }}></div>
              <div className="book-shelf-changer">
                <select value = {shelf} onChange = {(e) => (change(id, shelf, e))}>
                  <option value="move" disabled>Move to...</option>
                  <option value="currentlyReading">Currently Reading</option>
                  <option value="wantToRead">Want to Read</option>
                  <option value="read">Read</option>
                  <option value="none">None</option>
                </select>
              </div>
            </div>
            <div className="book-title">{title}</div>
            <div className="book-authors">{authors}</div>
          </div>
      </li>
  )
}

export default BookCardDesign;