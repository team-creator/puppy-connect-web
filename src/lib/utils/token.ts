const ACCESS_TOKEN_KEY = 'accessToken'

export const tokenRepository = {
  getAccessToken: () => {
    return localStorage.getItem(ACCESS_TOKEN_KEY)
  },

  setAccessToken: (accessToken: string) => {
    localStorage.setItem(ACCESS_TOKEN_KEY, accessToken)
  },

  removeAccessToken: () => {
    localStorage.removeItem(ACCESS_TOKEN_KEY)
  },
}
