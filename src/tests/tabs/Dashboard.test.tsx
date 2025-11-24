import { describe, it, expect, vi, afterEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import Dashboard from '../../tabs/Dashboard'

vi.mock('../layout/TabsContainer', () => ({
  TabsContainer: vi.fn(),
}))

describe('Dashboard', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('Renders title and subtitle', () => {
    render(<Dashboard />)
    expect(screen.getByTestId('DashboardTitle')).toHaveTextContent('LOLOS PASTRY')
    expect(screen.getByTestId('DashboardSubtitle')).toHaveTextContent('BATCH CALCULATOR')
  })
})
