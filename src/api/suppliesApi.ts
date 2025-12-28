import axios from 'axios'
import { Supplies, Unit, SuppliesUsed } from '../layout/types'

type createSupplyResponse = {
  id: string
  name: string
  description: string | null
  image: string | null
  createdAt: string
  usedSupplies: SuppliesUsed[]
  totalCostCents: number
}

type createSupplyRequest = {
  name: string
  unit: Unit
  costPerUnitCents?: number
}

export const createSupply = async ({
  name,
  unit,
  costPerUnitCents
}: createSupplyRequest): Promise<createSupplyResponse> => {
  const { data } = await axios.post('/api/supplies', {
    name,
    unit,
    costPerUnitCents: costPerUnitCents ?? 0
  })

  return data
}

export const getSupplies = async (): Promise<Supplies[]> => {
  const { data } = await axios.get<Supplies[]>('/api/supplies')
  return data
}
