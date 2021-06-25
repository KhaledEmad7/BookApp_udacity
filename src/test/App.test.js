import React from 'react'
import ReactDOM from 'react-dom'
import App from '../App'

//Test Driven Development happens here
//maybe try and edit in it later


it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<App />, div)
})


