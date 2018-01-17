import React from 'react'
import Home from './Home'
import UserList, { loadData } from './UserList'

// Routes must be defined like this for
// server rendering
const Routes = [
  {
    path: '/',
    exact: true,
    component: Home,
  },
  {
    loadData,
    path: '/users',
    component: UserList,
  },
]

export default Routes
