import { render, screen, fireEvent } from '@testing-library/react';
import { Home } from '../index';
import { BrowserRouter } from 'react-router-dom';

const MockHome = () => {
    return(
        <BrowserRouter>
            <Home/>
        </BrowserRouter>
    )
}

describe(('HomePage/index Integration test'), () => {

    const title = 'About This Project' 
    const text = 'Here we could maybe add reasons for why this is the best project ever'
    const subtitle = 'This is a subtitle';

    test("renders title", () => {
        render(<MockHome />);
        const titleElement = screen.getByText(title)
        expect(titleElement).toBeInTheDocument();
      });
      
      test("renders HomeTextBlock", () => {
        render(<MockHome />);
        const aboutElement = screen.getByText(text);
        expect(aboutElement).toBeInTheDocument();
      });

      test("renders the TitleBlock component with correct props", () => {
        render(<MockHome />);
        const titleBlockElement = screen.getByTestId("title-block");
        expect(titleBlockElement).toBeInTheDocument();
        
      });
      
})