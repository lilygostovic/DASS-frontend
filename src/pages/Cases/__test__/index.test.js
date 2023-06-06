
import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Cases } from "../index";
import { BrowserRouter } from "react-router-dom";
import { casesService } from "src/__mocks__/casesService";

const MockCases = () => {
  return(
      <BrowserRouter>
          <Cases/>
      </BrowserRouter>
  )
}


jest.mock("src/__mocks__/casesService")

const mockCases = [
  {
    id: 1,
    status: "open",
    gender: "male",
    country: "US",
    motive: "political",
  },
  {
    id: 2,
    status: "closed",
    gender: "female",
    country: "UK",
    motive: "religious",
  },
];

describe(("Cases/index"),  () => {

  beforeEach(() => {
    casesService.getCases.mockResolvedValue(mockCases);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("renders Cases component", async () => {
    render(<MockCases />);

  });
  });