import { RouterProvider } from 'react-router-dom'

import { FetchInterceptorProvider } from './FetchInterceptorProvider'
import TanstackQueryProvider from './TanstackQueryProvider'

import { router } from '@/router'

export function CoreProvider() {
  return (
    <TanstackQueryProvider>
      <FetchInterceptorProvider>
        <RouterProvider router={router} />
      </FetchInterceptorProvider>
    </TanstackQueryProvider>
  )
}
