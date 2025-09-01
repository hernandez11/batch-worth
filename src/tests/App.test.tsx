import { describe, it, expect, vi } from 'vitest'
import { render } from '@testing-library/react'
import { Home } from '../components/Home'
import App from '../App'

vi.mock('../components/Home', () => ({
  Home: vi.fn(),
}))

describe('App', () => {
  it('Displays home page', () => {
    const mockHome = vi.fn()
    vi.mocked(Home).mockImplementation(mockHome)

    render(<App />)

    expect(mockHome).toHaveBeenCalledOnce()
  })
})
