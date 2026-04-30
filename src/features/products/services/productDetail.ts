import type { ProductsInterface } from "@/interfaces/productsInterface";
import { apiClient } from "@/shared/utils/apiClient";


export const getById = async (id:number):Promise<ProductsInterface> => {

  try {
    const {data} = await apiClient.get<ProductsInterface>(`/${id}`)
    
    return data
  } catch (error) {
    console.log('Error al obtener data', error);
    throw error
  }
}