import { Navigate, Route, Routes } from 'react-router'
import Header from './shared/components/Header'
import './index.css'
import { PrivateRoute } from './shared/components/PrivateRoute'
import { Suspense } from 'react'
import { Spinner } from './shared/components/spinner'
import {
  AuthLayout,
  Cart,
  Login,
  ProductDetail,
  ProductList,
  Register,
} from './shared/routes/lazyPages'




export const AppRoute = () => {
  return (
    <Suspense fallback={<Spinner />}>
      <Routes>
        <Route path="/auth" element={<AuthLayout />}>
          <Route index element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>

        <Route
          path="/productos"
          element={
            <PrivateRoute>
              <Header />
              <ProductList />
            </PrivateRoute>
          }
        />
        <Route
          path="/productos/:id"
          element={
            <PrivateRoute>
              <Header />
              <ProductDetail />
            </PrivateRoute>
          }
        />
        <Route
          path="/carrito"
          element={
            <PrivateRoute>
              <Header />
              <Cart />
            </PrivateRoute>
          }
        />
        <Route path="/" element={<Navigate to="/auth" />} />
        <Route path="*" element={<div>404</div>} />
      </Routes>
    </Suspense>
  )
}
