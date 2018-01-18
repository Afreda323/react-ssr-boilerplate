import { combineReducers } from 'redux'
import users from './users.reducer'
import auth from './auth.reducer'
import admins from './admins.reducer'

export default combineReducers({
  users,
  auth,
  admins,
})
