export const FETCH_USERS = 'FETCH_USERS'
export const fetchUsers = () => async (dispatch, getState, api) => {
  const { data } = await api.get('/users')
  return dispatch({
    type: FETCH_USERS,
    payload: data,
  })
}

export const FETCH_CURRENT_USER = 'FETCH_CURRENT_USER'
export const fetchCurrentUser = () => async (dispatch, getState, api) => {
  const { data } = await api.get('/current_user')
  return dispatch({
    type: FETCH_CURRENT_USER,
    payload: data,
  })
}
