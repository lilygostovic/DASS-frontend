import { render, screen, fireEvent } from '@testing-library/react'
import { CountryCheckBox } from '../CountryCheckBox'

describe("CountryCheckBox", () => {
  const options = ['Denmark', 'Sweden', 'Norway']
  const setCheckedOptionsChart = jest.fn()
  const setHeight = jest.fn()
  const initialChartHeight = 100

  test('should renders checkboxes with correct labels', async() => {
    render(
      <CountryCheckBox
        options={options}
        setCheckedOptionsChart={setCheckedOptionsChart}
        setHeight={setHeight}
        initialChartHeight={initialChartHeight}
      />
    );
      
    options.forEach((option) => {
      const checkboxes = screen.getByText(`countries.${option}.fullName`)
      expect(checkboxes).toBeInTheDocument();
    })
  })


  test('checks and unchecks checkboxes', async() => {
    const { getByLabelText } = render(
      <CountryCheckBox
        options={options}
        setCheckedOptionsChart={setCheckedOptionsChart}
        setHeight={setHeight}
        initialChartHeight={initialChartHeight}
      />
    );
  
    options.forEach((option) => {
      const checkbox = getByLabelText(`countries.${option}.fullName`, { selector: 'input' })
      fireEvent.click(checkbox)
      expect(checkbox).toBeChecked()
      fireEvent.click(checkbox)
      expect(checkbox).not.toBeChecked()
    })
  })

  test('submit button work as expected', () => {
    const { getByText, getByLabelText } = render(
      <CountryCheckBox
        options={options}
        setCheckedOptionsChart={setCheckedOptionsChart}
        setHeight={setHeight}
        initialChartHeight={initialChartHeight}
      />
    );

    const submitButton = getByText('dashboardPage.addButton');
  
    options.forEach((option) => {
      const checkbox = getByLabelText(`countries.${option}.fullName`, { selector: 'input' });
      fireEvent.click(checkbox);
    });
    fireEvent.click(submitButton);
    expect(setCheckedOptionsChart).toHaveBeenCalledWith(options);
  })

  test('reset button work as expected', async() => {
    const { getByText, getByLabelText } = render(
      <CountryCheckBox
        options={options}
        setCheckedOptionsChart={setCheckedOptionsChart}
        setHeight={setHeight}
        initialChartHeight={initialChartHeight}
      />
    );

    const resetButton = getByText('dashboardPage.reset');
    fireEvent.click(resetButton);
    expect(setCheckedOptionsChart).toHaveBeenCalledWith([]);
    options.forEach((option) => {
      const checkbox = getByLabelText(`countries.${option}.fullName`, { selector: 'input' });
      expect(checkbox).not.toBeChecked();
    })
    
  })


})
