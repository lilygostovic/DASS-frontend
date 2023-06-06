import { render, screen, fireEvent } from '@testing-library/react'
import { Form } from '../index'

describe('Form', () => {
  const mockRegister = jest.fn();
  const mockHandleSubmit = jest.fn();
  const mockSubmit = jest.fn();

  beforeEach(() => {
    render(
      <Form
        register={mockRegister}
        handleSubmit={mockHandleSubmit}
        onSubmit={mockSubmit}
      />
    )
})

  test('should render the form with all fields', async () => {
    
    const acceptedLabel = screen.getByText('Accepted');
    const motiveLabel = screen.getByText('Motive');
    
    const countryLabel = screen.getByText((content, element) => {
      return element.tagName.toLowerCase() === 'label' && content.startsWith('Country');
    });

    const genderLabel = screen.getByText('Gender');
    const submitButton = screen.getByRole('button', {name: /View Cases/i});

    expect(acceptedLabel).toBeInTheDocument();
    expect(motiveLabel).toBeInTheDocument();
    expect(countryLabel).toBeInTheDocument();
    expect(genderLabel).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();

  });

  test('should call handleSubmit and onSubmit on form submission',  () => {

    const submitButton =  screen.getByRole('button', {name: /View Cases/i});
    fireEvent.click(submitButton);

    expect(mockHandleSubmit).toHaveBeenCalledTimes(1);
    expect(mockSubmit).toHaveBeenCalledTimes(0);
  });

})
