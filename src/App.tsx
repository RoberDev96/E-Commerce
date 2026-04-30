import { Navigate, Route, Routes } from 'react-router'
import Login from "@/features/auth/page/Login"
import { AuthLayout } from './features/auth/layout/authLayout'
import Register from './features/auth/page/Register'
import Header from './shared/components/Header'
import './index.css'
import { PrivateRoute } from './shared/components/PrivateRoute'
import { ProductList } from './features/products/pages/ProductList'
import { Suspense } from 'react'
import { Spinner } from './shared/components/spinner'
import { ProductDetail } from './features/products/pages/ProductDetail'




export const AppRoute = () => {
  return (
    <>
      <Routes>
        <Route path="/auth" element={<AuthLayout />}>
          <Route index element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>

        <Route
          path="/productos"
          element={
            <Suspense fallback={<Spinner />}>
              <PrivateRoute>
                <Header />
                <ProductList />
              </PrivateRoute>
            </Suspense>
          }
        />
        <Route
          path="/productos/:id"
          element={
            <Suspense fallback={<Spinner />}>
              <PrivateRoute>
                <Header />
                <ProductDetail />
              </PrivateRoute>
            </Suspense>
          }
        />
        <Route path="/" element={<Navigate to="/auth" />} />
        <Route path="*" element={<div>404</div>} />
      </Routes>
    </>
  )
}
