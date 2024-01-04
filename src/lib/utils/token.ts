const ACCESS_TOKEN_KEY = 'accessToken'

class TokenRepository {
  static getAccessToken() {
    return localStorage.getItem(ACCESS_TOKEN_KEY)
  }

  static setAccessToken(accessToken: string) {
    return localStorage.setItem(ACCESS_TOKEN_KEY, accessToken)
  }

  static removeAccessToken() {
    return localStorage.removeItem(ACCESS_TOKEN_KEY)
  }
}
