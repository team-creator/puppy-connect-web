import { RouterProvider } from 'react-router-dom'
import { FetchInterceptorProvider } from './FetchInterceptorProvider'
import { router } from '@/router'
import TanstackQueryProvider from './TanstackQueryProvider'

export function CoreProvider() {
  return (
    <TanstackQueryProvider>
      <FetchInterceptorProvider>
        <RouterProvider router={router} />
      </FetchInterceptorProvider>
    </TanstackQueryProvider>
  )
}
