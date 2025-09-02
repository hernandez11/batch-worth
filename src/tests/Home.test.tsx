import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Home } from '../components/Home'
import { Dashboard } from '../components/Dashboard'
import userEvent from '@testing-library/user-event'

vi.mock('../components/Dashboard', () => ({
  Dashboard: vi.fn(),
}))

describe('Home', () => {
  it('Renders tabs and displays dashboard by default', () => {
    const mockDashboard = vi.fn()
    vi.mocked(Dashboard).mockImplementation(mockDashboard)

    render(<Home />)

    const dashboardTab = screen.getByTestId('Dashboard')
    const ingredientsTab = screen.getByTestId('Ingredients')
    const recipesTab = screen.getByTestId('Recipes')
    const calculatorTab = screen.getByTestId('Batch-calculator')

    expect(dashboardTab).toHaveAttribute('aria-selected', 'true')
    expect(ingredientsTab).toHaveAttribute('aria-selected', 'false')
    expect(recipesTab).toHaveAttribute('aria-selected', 'false')
    expect(calculatorTab).toHaveAttribute('aria-selected', 'false')

    expect(mockDashboard).toHaveBeenCalledOnce()
  })

  it.each([['Ingredients'], ['Recipes'], ['Batch-calculator']])(
    'Renders ingredients tab on click',
    async (testId: string) => {
      render(<Home />)

      expect(screen.getByTestId('VerticalTabs')).toBeInTheDocument()

      const tabValue = screen.getByTestId(testId)

      expect(tabValue).toHaveAttribute('aria-selected', 'false')
      await userEvent.click(tabValue)
      expect(tabValue).toHaveAttribute('aria-selected', 'true')
    },
  )
})
