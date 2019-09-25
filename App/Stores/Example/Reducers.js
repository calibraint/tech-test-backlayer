import { INITIAL_STATE } from './InitialState'
import { createReducer } from 'reduxsauce'
import { ExampleTypes } from './Actions'

export const setUser = (state, { user }) => ({
  ...state,
  user: user
})

export const reducer = createReducer(INITIAL_STATE, {
  [ExampleTypes.SET_USER]: setUser
})
