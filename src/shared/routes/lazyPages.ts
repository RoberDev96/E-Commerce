import { lazy } from 'react'

export const AuthLayout = lazy(() =>
  import('@/features/auth/layout/authLayout').then((module) => ({
    default: module.AuthLayout,
  }))
)

export const Login  = lazy(() => import('@/features/auth/page/Login'))

export const Register = lazy(() => import('@/features/auth/page/Register'))

export const ProductList = lazy(() =>
  import('@/features/products/pages/ProductList').then((module) => ({
    default: module.ProductList,
  }))
)

export const ProductDetail = lazy(() =>
  import('@/features/products/pages/ProductDetail').then((module) => ({
    default: module.ProductDetail,
  }))
)

export const Cart = lazy(() =>
  import('@/features/cart/page/Cart').then((module) => ({
    default: module.Cart,
  }))
)
