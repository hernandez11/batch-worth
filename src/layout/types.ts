export type Supplies = {
  id: string
  name: string
  unit: unit
  costPerUnitCents: number | undefined
  usedInProducts: ProductRef[] //products this supply is used in
}

export type SuppliesUsed = {
  id: string
  name: string
  unit: unit
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
  usedSupplies: SuppliesUsed[] //supplies used in this product
  totalCostCents: number //total cost in cents to produce product
}

export type unit = 'tsp' | 'tbsp' | 'cups' | 'floz' | 'oz' | 'g' | 'ml' | 'each'
