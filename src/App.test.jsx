import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import userEvent from '@testing-library/user-event'
import App from './App'

describe('App', () => {
  it('renders expected text on screen', () => {
    render(<App />)

    expect(screen.getByText('Practice docker CI CD')).toBeInTheDocument()
  })

  it('renders a count button starting at 0', () => {
    render(<App />)

    expect(screen.getByRole('button', { name: /Count is 0/i })).toBeInTheDocument()
  })

  it('increases the count by one when clicked', async () => {
    const user = userEvent.setup()
    render(<App />)

    const button = screen.getByRole('button', { name: /Count is 0/i })
    await user.click(button)

    expect(button).toHaveTextContent('Count is 1')
  })
})