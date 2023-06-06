import { render, screen, fireEvent } from '@testing-library/react';
import { ContinentDropDown } from '../ContinentDropDown';

const mockedselectedOption = "all"
const  mockedsetOption = jest.fn()

describe('ContinentDropDown', () => {

    test('should render with all options', () => {
        const { getByTestId, getByText } = render(<ContinentDropDown selectedOption="all" setOption={mockedsetOption} />);
        const dropdown = getByTestId('Continent-drop-down');
        expect(dropdown).toBeInTheDocument();
    
      });


    test('Should change the country to Asien', async () => {
        render(<ContinentDropDown selectedOption={mockedselectedOption} setOption = {mockedsetOption}/>);
        const CheckElement =  screen.getByTestId("Continent-drop-down")
        fireEvent.change(CheckElement, {target: {value: 'Asien'}})
        expect(mockedsetOption).toHaveBeenCalledWith('Asien');
    });

})