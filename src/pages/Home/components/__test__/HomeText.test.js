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
  test('should render default state when no props provided', () => {
    render(<HomeTextBlock />);
    
    const titleElement = screen.queryByText(/title/i);
    const textElement = screen.queryByText(/text/i);
    
    expect(titleElement).not.toBeInTheDocument();
    expect(textElement).not.toBeInTheDocument();
    })
    
    test('should render long text', () => {
    const longText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    
    render(<HomeTextBlock title="Title" text={longText} />);
    
    const textElement = screen.getByText(longText);
    expect(textElement).toBeInTheDocument();
    })
    
    test('should align text center', () => {
    render(<HomeTextBlock title="Title" text="Text" align="center"/>);
    
    const textElement = screen.getByText('Text');
    expect(textElement).toHaveStyle('text-align: center');
    })
    
})
