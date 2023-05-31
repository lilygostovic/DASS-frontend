import { render, screen, fireEvent } from '@testing-library/react';
import { CheckBoxDropDown } from '../CheckBoxDropDown';

const mockedselectedOption = "all"
const  mockedsetOption = jest.fn()

describe('CheckBoxDropDown', () => {

    test('Should change the country to all', async () => {
        render(<CheckBoxDropDown selectedOption={mockedselectedOption} setOption = {mockedsetOption}/>);
        const CheckElement = screen.getByTestId("check-box-dropdown")
        fireEvent.change(CheckElement, {target: {value: 'all'}})
        expect(CheckElement.value).toBe('all');
    });

    test('Should change the country to asia', async () => {
        render(<CheckBoxDropDown selectedOption={mockedselectedOption} setOption = {mockedsetOption}/>);
        const CheckElement = screen.getByTestId("check-box-dropdown")
        fireEvent.change(CheckElement, {target: {value: 'asia'}})
        expect(CheckElement.value).toBe('asia');
    });

    test('Should change the country to america', async () => {
        render(<CheckBoxDropDown selectedOption={mockedselectedOption} setOption = {mockedsetOption}/>);
        const CheckElement = screen.getByTestId("check-box-dropdown")
        fireEvent.change(CheckElement, {target: {value: 'america'}})
        expect(CheckElement.value).toBe('america');
    });

    test('Should change the country to africa', async () => {
        render(<CheckBoxDropDown selectedOption={mockedselectedOption} setOption = {mockedsetOption}/>);
        const CheckElement = screen.getByTestId("check-box-dropdown")
        fireEvent.change(CheckElement, {target: {value: 'africa'}})
        expect(CheckElement.value).toBe('africa');
    });

    test('Should change the country to europe', async () => {
        render(<CheckBoxDropDown selectedOption={mockedselectedOption} setOption = {mockedsetOption}/>);
        const CheckElement = screen.getByTestId("check-box-dropdown")
        fireEvent.change(CheckElement, {target: {value: 'europe'}})
        expect(CheckElement.value).toBe('europe');
    });

    test('Should change the country to other', async () => {
        render(<CheckBoxDropDown selectedOption={mockedselectedOption} setOption = {mockedsetOption}/>);
        const CheckElement = screen.getByTestId("check-box-dropdown")
        fireEvent.change(CheckElement, {target: {value: 'other'}})
        expect(CheckElement.value).toBe('other');
    });

})