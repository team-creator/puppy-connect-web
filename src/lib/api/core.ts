import axios, { type AxiosRequestConfig } from 'axios'

export type AppEnv = 'production' | 'development' | 'localhost'

const getAppEnv = (): AppEnv => (process.env.NEXT_PUBLIC_APP_ENV as Exclude<AppEnv, 'development'>) || 'development'

const getApiEndpoint = () => {
  return import.meta.env.VITE_APP_API_ENDPOINT
}

const createApi = () => {
  const api = axios.create({
    baseURL: getApiEndpoint(),
  })

  return api
}

export const axiosInstance = createApi()

export interface ServerResponse<T> {
  statusCode: number
  message: string
  success: boolean
  payload: T
}

const api = {
  get: <T>(url: string, config?: AxiosRequestConfig) =>
    axiosInstance.get<ServerResponse<T>>(url, config).then((res) => res),
  post: <T>(url: string, payload?: object, config?: AxiosRequestConfig) =>
    axiosInstance.post<ServerResponse<T>>(url, payload, config).then((res) => res),
  put: <T>(url: string, payload?: object, config?: AxiosRequestConfig) =>
    axiosInstance.put<ServerResponse<T>>(url, payload, config).then((res) => res),
  patch: <T>(url: string, payload?: object, config?: AxiosRequestConfig) =>
    axiosInstance.patch<ServerResponse<T>>(url, payload, config).then((res) => res),
  delete: <T>(url: string, config?: AxiosRequestConfig) =>
    axiosInstance.delete<ServerResponse<T>>(url, config).then((res) => res),
}

export default api
