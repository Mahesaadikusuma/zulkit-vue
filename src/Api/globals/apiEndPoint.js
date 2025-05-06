import CONFIG from './config'

const API_ENDPOINT = {
  products: `${CONFIG.BASE_URL}/products`,
  categories: `${CONFIG.BASE_URL}/categories`,
  login: `${CONFIG.BASE_URL}/login`,
  register: `${CONFIG.BASE_URL}/register`,
  profileUser: `${CONFIG.BASE_URL}/user`,
}

export default API_ENDPOINT
