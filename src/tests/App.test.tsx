import { describe, it, expect, vi, afterEach } from 'vitest'
import { render } from '@testing-library/react'
import { TabsContainer } from '../layout/TabsContainer'
import App from '../App'

vi.mock('../layout/TabsContainer', () => ({
  TabsContainer: vi.fn(),
}))

describe('App', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('Displays TabsContainer', () => {
    render(<App />)

    expect(TabsContainer).toHaveBeenCalledTimes(1)
  })
})
