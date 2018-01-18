import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

class IsAuth extends Component {
  render() {
    switch (this.props.auth) {
      case false:
        return <Redirect to="/" />
      case null:
        return (
          <div>
            <p>Loading...</p>
          </div>
        )
      default:
        return this.props.render(this.props)
    }
  }
}

IsAuth.propTypes = {
  render: PropTypes.func.isRequired,
}

const mapStateToProps = ({ auth }) => ({
  auth,
})

export default connect(mapStateToProps)(IsAuth)
