export type Supplies = {
  id: string
  name: string
  unit: Unit
  costPerUnitCents: number | undefined
  createdAt: string
}

export type SuppliesUsed = {
  id: string
  name: string
  unit: Unit
  quantityUsed: number | undefined
}

export type ProductRef = {
  id: string
  name: string
}

export type Product = {
  id: string
  name: string
  description: string | null
  image: string | null
  createdAt: string
  usedSupplies: SuppliesUsed[] //supplies used in this product
  totalCostCents: number //total cost in cents to produce product
}

export type Unit = 'tsp' | 'tbsp' | 'cups' | 'floz' | 'oz' | 'g' | 'ml' | 'each'
