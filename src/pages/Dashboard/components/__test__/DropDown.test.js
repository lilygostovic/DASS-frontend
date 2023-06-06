import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { DropDown } from '../DropDown';

const setOptionMock = jest.fn()

describe('DropDown', () => {
    test('should render with correct options', () => {
      render(<DropDown selectedOption="result" setOption={setOptionMock} />);
      expect(screen.getByText(/Result/i)).toBeInTheDocument();
      expect(screen.getByText(/Gender/i)).toBeInTheDocument();
      expect(screen.getByText(/Motive/i)).toBeInTheDocument();
      expect(screen.getByText(/LGBT/i)).toBeInTheDocument();
    });
  
    test('should call setOption when an option is selected', () => {
    render(<DropDown selectedOption="result" setOption={setOptionMock} />);
    const optionElement = screen.getByRole("combobox");
    fireEvent.change(optionElement, { target: { value: 'gender' } })
      expect(setOptionMock).toHaveBeenCalledWith('gender');
    });
  });
  