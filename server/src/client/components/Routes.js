import React from 'react'
import HomePage from '../pages/HomePage'
import UserListPage from '../pages/UserListPage'

// Routes must be defined like this for
// server rendering
const Routes = [
  {
    ...HomePage,
    path: '/',
    exact: true,
  },
  {
    ...UserListPage,
    path: '/users',
  },
]

export default Routes
