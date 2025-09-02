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

    expect(mockDashboard).toHaveBeenCalledOnce()
    expect(screen.getByTestId('VerticalTabs')).toBeInTheDocument()
  })
})
