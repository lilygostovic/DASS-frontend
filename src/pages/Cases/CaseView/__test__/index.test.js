import { render, screen } from '@testing-library/react'
import { CaseView } from '../index'

describe('CaseView', () => {

  test('should render the case view correctly', () => {
    const randomCase = {
      id: 1,
      status: 'Accepted',
      keywords: [
        { id: 1, name: 'Keyword 1' },
        { id: 2, name: 'Keyword 2' },
      ],
      country: { id: 1, name: 'Country 1' },
      gender: 'Male',
      body: 'This is the case body.',
    }

    render(<CaseView randomCase={randomCase} />)

    const titleElement = screen.getAllByText(new RegExp(`${randomCase.id}`, 'i'));
    const highlightsElement = screen.getByTestId('case-view')
    const bodyElement = screen.getByText(randomCase.body)

    expect(titleElement[0]).toBeInTheDocument()
    expect(highlightsElement).toBeInTheDocument()
    expect(bodyElement).toBeInTheDocument()
  })
})
