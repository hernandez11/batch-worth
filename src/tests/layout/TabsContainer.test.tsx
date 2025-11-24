import { describe, it, expect, vi, afterEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import TabsContainer from '../../layout/TabsContainer'
import userEvent from '@testing-library/user-event'
import Dashboard from '../../layout/tabs/Dashboard'

vi.mock('../../layout/tabs/Dashboard', () => ({
  default: vi.fn(),
}))

describe('TabsContainer', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('Renders tabs and displays dashboard by default', () => {
    render(<TabsContainer />)

    const dashboardTab = screen.getByTestId('DashboardTab')
    const ingredientsTab = screen.getByTestId('IngredientsTab')
    const recipesTab = screen.getByTestId('RecipesTab')
    const calculatorTab = screen.getByTestId('CalculatorTab')

    expect(dashboardTab).toHaveAttribute('aria-selected', 'true')
    expect(ingredientsTab).toHaveAttribute('aria-selected', 'false')
    expect(recipesTab).toHaveAttribute('aria-selected', 'false')
    expect(calculatorTab).toHaveAttribute('aria-selected', 'false')

    expect(Dashboard).toHaveBeenCalledTimes(1)
  })

  it.each([['IngredientsTab'], ['RecipesTab'], ['CalculatorTab']])(
    'Renders selected %s on click',
    async (testId: string) => {
      render(<TabsContainer />)

      const tab = screen.getByTestId(testId)

      expect(tab).toHaveAttribute('aria-selected', 'false')
      await userEvent.click(tab)
      expect(tab).toHaveAttribute('aria-selected', 'true')
    },
  )
})
