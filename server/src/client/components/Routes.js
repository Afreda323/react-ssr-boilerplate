import React from 'react'
import { Route } from 'react-router-dom'
import Home from './Home'
import UserList from './UserList'

const Routes = () => {
  return (
    <div>
      <Route exact path="/" component={Home} />
      <Route exact path="/users" component={UserList} />
    </div>
  )
}

export default Routes
