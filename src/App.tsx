import { Navigate, Route, Routes } from 'react-router'
import Login from "@/features/auth/page/Login"
import { AuthLayout } from './features/auth/layout/authLayout'
import Register from './features/auth/page/Register'
import Header from './shared/components/Header'
import './index.css'
import { PrivateRoute } from './shared/components/PrivateRoute'
import { ProductList } from './features/products/pages/ProductList'


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
            <PrivateRoute>
              <Header />
              <ProductList />
            </PrivateRoute>
          }
        />

        <Route path="/" element={<Navigate to="/auth" />} />
        <Route path="*" element={<div>404</div>} />
      </Routes>
    </>
  )
}
