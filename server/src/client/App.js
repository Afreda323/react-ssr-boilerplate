import React, { Component } from 'react'
import { connect } from 'react-redux'
import { renderRoutes } from 'react-router-config'
import { fetchCurrentUser } from './actions'
import Header from './components/Header'

class App extends Component {
  render() {
    return (
      <div>
        <Header isLoggedIn={this.props.auth} />
        {renderRoutes(this.props.route.routes)}
      </div>
    )
  }
}

const mapStateToProps = ({ auth }) => ({ auth })

export default {
  loadData: ({ dispatch }) => dispatch(fetchCurrentUser()),
  component: connect(mapStateToProps, { fetchCurrentUser })(App),
}
