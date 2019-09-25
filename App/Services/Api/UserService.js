import { create } from 'apisauce'
import { Config } from '../../Config'

const userApiClient = create({
  /**
   * Import the config from the App/Config/index.js file
   */
  baseURL: Config.API_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  timeout: 30000,
})

function sample() {
  return userApiClient.get('/url').then((response) => {
    if (response.ok) {
      return response.data
    }

    return null
  })
}

export const userService = {
  sample
}
