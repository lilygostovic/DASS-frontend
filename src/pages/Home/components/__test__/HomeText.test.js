import { render, screen } from '@testing-library/react' 
import { HomeTextBlock } from '../HomeText'

describe('HomeTextBlock', () => {
  test('should render the title and text correctly', () => {
    const title = 'About This Project' 
    const text = 'Here we could maybe add reasons for why this is the best project ever' 
    render(<HomeTextBlock title={title} text={text} />) 

    const titleElement = screen.getByText(title) 
    const textElement = screen.getByText(text) 

    expect(titleElement).toBeInTheDocument() 
    expect(textElement).toBeInTheDocument() 
  }) 
})
