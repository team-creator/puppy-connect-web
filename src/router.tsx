import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

import HomePage from '@/app/home/page'
import { ROUTE } from '@/constants/route'

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path={ROUTE.HOME} element={<HomePage />} />
    </Route>
  )
)
