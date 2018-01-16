import axios from 'axios'

export const FETCH_USERS = 'FETCH_USERS'

export const fetchUsers = () => async dispatch => {
  const { data } = await axios.get('https://react-ssr-api.herokuapp.com/users')
  return dispatch({
    type: FETCH_USERS,
    payload: data,
  })
}
