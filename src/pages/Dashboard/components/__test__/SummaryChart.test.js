import { render, screen } from '@testing-library/react'
import { SummaryChart } from '../SummaryChart'

describe('SummaryChart', () => {
  test('should display empty page message when displayed data is empty', async () => {
    const data = []
    const w = 500
    const h = 500
    const isSummaryPage = true
    const emptyPageText1 = /No countries for this category currently selected/
    const emptyPageText2 = /To see countries from this category, please select from the options to your right/
    const props = {
      data,
      w,
      h,
      isSummaryPage,
    }

    render(<SummaryChart {...props} />)

    const emptyPageText1Element = await screen.findByText(emptyPageText1)
    const emptyPageText2Element = await screen.findByText(emptyPageText2)

    expect(emptyPageText1Element).toBeInTheDocument()
    expect(emptyPageText2Element).toBeInTheDocument()
  })
})
