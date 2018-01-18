import React from 'react'
import App from './App'
import HomePage from './pages/HomePage'
import UserListPage from './pages/UserListPage'

// Routes must be defined like this for
// server rendering
const Routes = [
  {
    ...App,
    routes: [
      {
        ...HomePage,
        path: '/',
        exact: true,
      },
      {
        ...UserListPage,
        path: '/users',
      },
    ],
  },
]

export default Routes
