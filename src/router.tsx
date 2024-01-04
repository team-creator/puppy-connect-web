import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { ROUTE } from '@/constants/route'
import HomePage from '@/app/home/page'

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path={ROUTE.HOME} element={<HomePage />} />
    </Route>
  )
)
