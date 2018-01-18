import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchAdmins } from '../actions'
import IsAuth from '../hoc/IsAuth'

class AdminList extends Component {
  componentDidMount() {
    this.props.fetchAdmins()
  }
  render() {
    return (
      <IsAuth
        render={() => (
          <div>
            <h1>Admin List Page</h1>
            <ul>
              {this.props.admins.map(admin => (
                <li key={admin.name}>{admin.name}</li>
              ))}
            </ul>
          </div>
        )}
      />
    )
  }
}

const stateToProps = state => ({
  admins: state.admins,
})

// Function that is called on server side
// before initial page load for prepopulating store
const loadData = ({ dispatch }) => dispatch(fetchAdmins())

export default {
  loadData,
  component: connect(stateToProps, { fetchAdmins })(AdminList),
}
