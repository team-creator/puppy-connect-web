import { useAxiosInterceptor } from '@/lib/hooks'

export function FetchInterceptorProvider({ children }: { children: React.ReactNode }) {
  useAxiosInterceptor()

  return <>{children}</>
}
