import React from 'react'
import ReactDOM from 'react-dom'
import Routes from './components/Routes'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.hydrate(
  <BrowserRouter>
    <Routes />
  </BrowserRouter>,
  document.querySelector('#root')
)
