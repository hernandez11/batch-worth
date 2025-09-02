import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Home } from '../components/Home'
import { Dashboard } from '../components/Dashboard'

vi.mock('../components/Dashboard', () => ({
  Dashboard: vi.fn(),
}))

describe('Home', () => {
  it('Displays dashboard and tabs', () => {
    const mockDashboard = vi.fn()
    vi.mocked(Dashboard).mockImplementation(mockDashboard)

    render(<Home />)

    expect(screen.getByTestId('VerticalTabs')).toBeInTheDocument()
    expect(screen.getByTestId('Dashboard')).toBeInTheDocument()
    expect(screen.getByTestId('Ingredients')).toBeInTheDocument()
    expect(screen.getByTestId('Recipes')).toBeInTheDocument()
    expect(screen.getByTestId('Batch-calculator')).toBeInTheDocument()

    expect(mockDashboard).toHaveBeenCalledOnce()
  })
})
