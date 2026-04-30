import type { Category, ProductsInterface } from '@/interfaces/productsInterface'

export type ProductCategoryFilter = Category | 'all'

export const categoryFilters: { label: string; value: ProductCategoryFilter }[] = [
  { label: 'VER TODOS', value: 'all' },
  { label: "MEN'S CLOTHING", value: "men's clothing" },
  { label: 'JEWELERY', value: 'jewelery' },
  { label: 'ELECTRONIC', value: 'electronics' },
  { label: "WOMEN'S CLOTHING", value: "women's clothing" }
]

export const filterProductsByCategory = (
  products: ProductsInterface[],
  category: ProductCategoryFilter
) => {
  if (category === 'all') {
    return products
  }

  return products.filter((product) => product.category === category)
}
