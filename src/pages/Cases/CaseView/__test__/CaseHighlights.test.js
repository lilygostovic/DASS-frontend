import { render, screen } from '@testing-library/react'
import { FilterProperty, CaseHighlights } from '../CaseHighlights'

describe('FilterProperty', () => {
  test('should render the filter and value correctly', () => {
    const filter = 'Accepted'
    const value = 'Yes'
    render(<FilterProperty filter={filter} value={value} />)
    const filterElement = screen.getByText(`${filter}:`)
    const valueElement = screen.getByText(value)
    expect(filterElement).toBeInTheDocument()
    expect(valueElement).toBeInTheDocument()
  })
})

describe('CaseHighlights', () => {

  test('should render the case highlights correctly', () => {

    const randomCase = {
      status: 'Accepted',
      keywords: [
        { id: 1, name: 'Keyword 1' },
        { id: 2, name: 'Keyword 2' },
      ],
      country: { id: 1, name: 'Country 1' },
      gender: 'Male',
    }
    render(<CaseHighlights randomCase={randomCase} />)
    const acceptedFilterElement = screen.getByText('Accepted')
    const acceptedValueElement = screen.getByText(randomCase.status)
    const motiveFilterElement = screen.getByText(/motive/i)
    const motiveValueElement = screen.getByText(
      randomCase.keywords.map((keyword) => keyword.name).join(', ')
    )
    
    const countryFilterElement = screen.getAllByText(/country/i)[0]
    const countryValueElement = screen.getByText(randomCase.country.name)
    const genderFilterElement = screen.getByText(/gender/i)
    const genderValueElement = screen.getByText(randomCase.gender)

    expect(acceptedFilterElement).toBeInTheDocument()
    expect(acceptedValueElement).toBeInTheDocument()
    expect(motiveFilterElement).toBeInTheDocument()
    expect(motiveValueElement).toBeInTheDocument()
    expect(countryFilterElement).toBeInTheDocument()
    expect(countryValueElement).toBeInTheDocument()
    expect(genderFilterElement).toBeInTheDocument()
    expect(genderValueElement).toBeInTheDocument()
  })
})

