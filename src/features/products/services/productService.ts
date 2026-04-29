import type { ProductsInterface } from "@/interfaces/productsInterface";
import { sleep } from "@/shared/utils/sleep";
import { apiClient } from '../../../shared/utils/apiClient'

export const getAllProducts = async ():Promise<ProductsInterface[]> => {
 
  await sleep(1500);
   
  try{
    const { data } = await apiClient.get<ProductsInterface[]>('/')
    return data
     
  } catch (error) {
    console.log('Error al obtener data', error);
    throw error
  }
   
}