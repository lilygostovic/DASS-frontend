import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { BrowserRouter} from 'react-router-dom'
import { Nav } from '../index'

const MockNav = () => {
    return(
         <BrowserRouter>
            <Nav/>
        </BrowserRouter>
    )
  }

describe('Nav component integration test', () => {

  beforeEach(() => {
    render(<MockNav/>)
})

  test('renders navigation links and language picker', () => {

    // Check if the navigation links are rendered correctly
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('Summary')).toBeInTheDocument()
    expect(screen.getByText('Cases')).toBeInTheDocument()

    // Check if the language picker is rendered
    expect(screen.getByTestId('LanguageSwitch')).toBeInTheDocument()
  })

  test('applies "active" class to the active navigation link', () => {

    // Check if the active navigation link has the "active" class
    const summaryLink = screen.getByText('Summary')
    expect(summaryLink).toHaveClass('sc-bcXHqe jnlGUd')

    // Check that other navigation links do not have the "active" class
    const homeLink = screen.getByText('Home')
    const casesLink = screen.getByText('Cases')
    expect(homeLink).not.toHaveClass('sc-hLBbgP dQVlpX active')
    expect(casesLink).not.toHaveClass('sc-hLBbgP dQVlpX active')
  })

  test('changes language when language picker is used', () => {

    // Initial language should be "en"
    expect(screen.getByText('DA').getAttribute('selected')).toBeNull()
    expect(screen.getByText('EN').getAttribute('selected')).toBeDefined()

    // Change language to "da" and verify the language switch
    fireEvent.change(screen.getByTestId('LanguageSwitch'), { target: { value: 'da' } })
    expect(screen.getByText('DA').getAttribute('selected')).toBeDefined()
    expect(screen.getByText('EN').getAttribute('selected')).toBeNull()

    // Change language back to "en" and verify the language switch
    fireEvent.change(screen.getByTestId('LanguageSwitch'), { target: { value: 'en' } })
    expect(screen.getByText('DA').getAttribute('selected')).toBeNull()
    expect(screen.getByText('EN').getAttribute('selected')).toBeDefined()

  })
})
