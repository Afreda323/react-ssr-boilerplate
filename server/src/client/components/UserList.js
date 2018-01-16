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
export default connect(stateToProps, { fetchUsers })(UserList)
