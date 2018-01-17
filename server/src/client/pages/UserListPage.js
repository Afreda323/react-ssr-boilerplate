import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../actions'

class UserList extends Component {
  componentDidMount() {
    this.props.fetchUsers()
  }
  render() {
    return (
      <div>
        <h1>User List Page</h1>
        <ul>
          {this.props.users.map(user => <li key={user.name}>{user.name}</li>)}
        </ul>
      </div>
    )
  }
}

const stateToProps = state => ({
  users: state.users,
})

// Function that is called on server side
// before initial page load for prepopulating store
const loadData = store => store.dispatch(fetchUsers())

export default {
  loadData,
  component: connect(stateToProps, { fetchUsers })(UserList),
}
