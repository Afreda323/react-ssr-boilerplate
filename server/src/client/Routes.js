import React from 'react'
import App from './App'
import HomePage from './pages/HomePage'
import UserListPage from './pages/UserListPage'
import AdminListPage from './pages/AdminListPage'
import NotFoundPage from './pages/NotFoundPage'

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
      {
        ...AdminListPage,
        path: '/admins',
      },
      {
        ...NotFoundPage,
      },
    ],
  },
]

export default Routes
