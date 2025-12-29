import axios from 'axios'
import { Unit, Product } from '../layout/types'

type CreateSupplyResponse = Product

type CreateSupplyRequest = {
  name: string
  unit: Unit
  costPerUnitCents?: number
}

export const createSupply = async (
  createSupplyRequest: CreateSupplyRequest
): Promise<CreateSupplyResponse> => {
  const { data } = await axios.post('/api/supplies', createSupplyRequest)

  return data
}
