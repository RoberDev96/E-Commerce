import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import type { ReactNode } from 'react'
import type { ProductsInterface } from '@/interfaces/productsInterface'

const CART_STORAGE_KEY = 'cart'

interface CartProviderProps {
  children: ReactNode
}

export interface CartItem {
  product: ProductsInterface
  quantity: number
}

interface CartContextType {
  cart: CartItem[]
  addItem: (product: ProductsInterface) => void
  removeItem: (productId: number) => void
  updateQuantity: (productId: number, quantity: number) => void
  clearCart: () => void
  totalItems: number
  totalPrice: number
}

const CartContext = createContext<CartContextType | undefined>(undefined)

const getStoredCart = (): CartItem[] => {
  const storedCart = localStorage.getItem(CART_STORAGE_KEY)

  if (!storedCart) return []

  try {
    return JSON.parse(storedCart) as CartItem[]
  } catch {
    return []
  }
}

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cart, setCart] = useState<CartItem[]>(() => {
    return getStoredCart()
  })

  useEffect(() => {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart))
  }, [cart])

  const addItem = useCallback((product: ProductsInterface) => {
    setCart((currentCart) => {
      const existingItem = currentCart.find(
        (item) => item.product.id === product.id
      )

      if (!existingItem) {
        return [...currentCart, { product, quantity: 1 }]
      }

      return currentCart.map((item) =>
        item.product.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    })
  }, [])

  const removeItem = useCallback((productId: number) => {
    setCart((currentCart) =>
      currentCart.filter((item) => item.product.id !== productId)
    )
  }, [])

  const updateQuantity = useCallback((productId: number, quantity: number) => {
    setCart((currentCart) => {
      if (quantity <= 0) {
        return currentCart.filter((item) => item.product.id !== productId)
      }

      return currentCart.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    })
  }, [])

  const clearCart = useCallback(() => {
    setCart([])
  }, [])

  const totalItems = useMemo(
    () => cart.reduce((total, item) => total + item.quantity, 0),
    [cart]
  )

  const totalPrice = useMemo(
    () => cart.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0
    ),
    [cart]
  )

  const value = useMemo(
    () => ({
      cart,
      addItem,
      removeItem,
      updateQuantity,
      clearCart,
      totalItems,
      totalPrice,
    }),
    [cart, addItem, removeItem, updateQuantity, clearCart, totalItems, totalPrice]
  )

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const context = useContext(CartContext)

  if (!context) throw new Error('useCart must be used within CartProvider')

  return context
}
