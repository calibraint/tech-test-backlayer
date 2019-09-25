import { createActions } from 'reduxsauce'

const { Types, Creators } = createActions({
  // set user informations
  setUser: ['user'],
})

export const ExampleTypes = Types
export default Creators
