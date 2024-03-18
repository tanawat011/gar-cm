import axios from 'axios'

// const isServer = typeof window === 'undefined'

const auth0Api = axios.create({
  baseURL: process.env.AUTH0_ISSUER_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

// auth0Api.interceptors.request.use(async (config) => {
//   if (isServer) {
//     const { cookies } = await import('next/headers'),
//       token = cookies().get('token')?.value

//     if (token) {
//       config.headers['Authorization'] = `Bearer ${token}`
//     }
//   } else {
//     const token = document.cookie.replace(/(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/, '$1')

//     if (token) {
//       config.headers['Authorization'] = `Bearer ${token}`
//     }
//   }

//   return config
// })

export default auth0Api
