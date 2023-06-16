import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Dashboard } from "../index";
import { BrowserRouter } from "react-router-dom";

const MockDashboard = () => {
    return(
        <BrowserRouter>
            <Dashboard/>
        </BrowserRouter>
    )
}

describe("Dashboard", () => {

    beforeEach(() => {
        render(<MockDashboard />)
    })

    test("renders the chart and dropdowns", async () => {
    
        const dropdownElement = await screen.findByText("Result");
        expect(dropdownElement).toBeInTheDocument();
    
        const chartElement = screen.getByTestId("summary-page");
        expect(chartElement).toBeInTheDocument();
      });
    

    test("Dropdown displays correct options", () => {

      const dropdown = screen.getByTestId("dropdown");
      expect(dropdown).toHaveTextContent("Result");
      expect(dropdown).toHaveTextContent("LGBT");
      expect(dropdown).toHaveTextContent("Gender");
    });

    test("renders checkboxes", () => {

        const checkboxes = screen.getByTestId("checkbox");
        expect(checkboxes).toBeInTheDocument();
        });

    test("can change axis option", () => {
        const dropDown = screen.getAllByRole("button")[0];
        dropDown.click();
        const options = screen.getAllByRole("option");
        fireEvent.click(options[1]);
        expect(dropDown.textContent).toBe("Reset");
        });

    test("can change continent option", () => {
        
        const continentDropDown = screen.getByTestId("check-box-dropdown")
        continentDropDown.click()

        const options = screen.getAllByRole("option");  
        fireEvent.click(options[1]);
        expect(continentDropDown.textContent).toEqual("AllAsiaAmericaAfricaEuropeOther");
        });

    test("renders the checkbox and updates the chart when a country is selected", async () => {
    
        const checkboxElement = await screen.findByTestId("checkbox");
        expect(checkboxElement).toBeInTheDocument();
    
        const checkboxOption = await screen.findByTestId('checkbox', { value: 'Brasilien' });
        fireEvent.click(checkboxOption);
    
        const chartElement = screen.getByTestId("summary-page");
        expect(chartElement).toBeInTheDocument();
        });

    test("updates the chart when a different option is selected", async () => {
    
        const dropdownElement = await screen.findByText("Result");
        fireEvent.change(dropdownElement, { target: { value: "lgbt" } });
    
        const chartElement = screen.getByTestId("summary-page");
        expect(chartElement).toBeInTheDocument();
        });

})