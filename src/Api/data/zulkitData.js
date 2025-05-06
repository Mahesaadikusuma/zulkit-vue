import axios from 'axios'
import API_ENDPOINT from '../globals/apiEndPoint'

class ZulkitDB {
  static async getProducts(params = {}) {
    try {
      const response = await axios.get(API_ENDPOINT.products, { params })
      if (response.status !== 200) {
        throw new Error('Network response not ok')
      }
      return response.data.data
    } catch (error) {
      console.log(error)
    }
  }

  static async getCategories(params = {}) {
    try {
      const response = await axios.get(API_ENDPOINT.categories, { params })
      if (response.status !== 200) {
        throw new Error('Network response not ok')
      }
      return response.data.data
    } catch (error) {
      console.log(error)
    }
  }

  static async AuthLogin(data) {
    try {
      const response = await axios.post(API_ENDPOINT.login, data)
      if (response.status !== 200) {
        throw new Error('Network response not ok')
      }
      return response.data.data
    } catch (error) {
      console.log(error)
      throw error
    }
  }

  static async AuthRegister(data) {
    try {
      const response = await axios.post(API_ENDPOINT.register, data)
      if (response.status !== 200) {
        throw new Error('Network response not ok')
      }
      return response.data.data
    } catch (err) {
      console.log(err)
      throw err
    }
  }
  static async AuthUserProfile() {
    try {
      const response = await axios.get(API_ENDPOINT.profileUser, {
        headers: getAuthHeader(),
      })
      if (response.status !== 200) {
        throw new Error('Network response not ok')
      }
      console.log(response.data.data)
      return response
    } catch (err) {
      console.error('AuthUserProfile error:', err)
      throw err
    }
  }
}

function getAuthHeader() {
  return {
    Authorization: `${localStorage.getItem('token_type')} ${localStorage.getItem('tokenAuth')}`,
    // Authorization: localStorage.getItem('token_type') + ' ' + localStorage.getItem('tokenAuth'),
    'Content-Type': 'application/json',
  }
}

export default ZulkitDB
