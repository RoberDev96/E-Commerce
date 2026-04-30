import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { AppRoute } from './App.tsx'
import { BrowserRouter } from 'react-router'
import { AuthProvider } from './features/auth/context/AuthContext.tsx'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import './index.css'
import { CartProvider } from './features/cart/context/cartContext.tsx'

const queryClient = new QueryClient()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <CartProvider>
            <AppRoute />
            <ReactQueryDevtools initialIsOpen={false} />
          </CartProvider>
        </AuthProvider>
      </QueryClientProvider>
    </BrowserRouter>
  </StrictMode>,
)
