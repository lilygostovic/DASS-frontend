
import { render, screen, waitFor, fireEvent } from "@testing-library/react"
import { casesService } from "src/services/casesService/index.ts"
import { Cases } from "../index"
import { BrowserRouter } from "react-router-dom"
import { act } from 'react-dom/test-utils'

jest.mock("src/services/casesService/index.ts")

const mockGetCases = jest.fn()
// Assign the mock function to the getCases property of the casesService object
casesService.getCases = mockGetCases

const MockCases = () => {
  return(
       <BrowserRouter>
          <Cases/>
      </BrowserRouter>
  )
}


describe(("Cases/index integration tests"),  () => {

  beforeEach(async () => {
    await act(async () => {
      render(<MockCases />)
    })
    mockGetCases.mockResolvedValue([])
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  test('renders form and submits with no results', async () => {

    const formElement = await screen.findByTestId('cases-form')
    expect(formElement).toBeInTheDocument()
  
    const submitButton = await screen.findByTestId('submit-button')

    // Fill out form and submit
    fireEvent.change(screen.getByLabelText('Accepted/Rejected'), { target: { value: 'Accepted' } })
    fireEvent.change(screen.getByLabelText('Gender'), { target: { value: 'Male' } })
    fireEvent.change(screen.getByLabelText('Country of Origin'), { target: { value: 'Poland' } })
    fireEvent.change(screen.getByLabelText('Motive'), { target: { value: 'Abuse' } })
    fireEvent.submit(submitButton)

    await waitFor(() => {
      expect(mockGetCases).toHaveBeenCalledTimes(1)
    })

    const noResultImageElement = await screen.findByRole("img")
    const noResultTextElement = await screen.findByText(/no result found/i)
    expect(noResultTextElement).toBeInTheDocument()
    expect(noResultImageElement).toBeInTheDocument()
  })

  test('renders form and submits with results', async () => {

    const dataCases = {
      id: 1,
      timestamp: new Date('2022-06-01T00:00:00Z'),
      gender: 'Male',
      status: 'Accepted',
      body: 'This the body of the case',
      country: 'United States',
      keywords: ['keyword1', 'keyword2'],
    }
    mockGetCases.mockResolvedValue([dataCases])

    const formElement = await screen.findByTestId('cases-form')
    expect(formElement).toBeInTheDocument()
  
    const submitButton = await screen.findByTestId('submit-button')

    // Fill out form and submit
    fireEvent.change(screen.getByLabelText('Accepted/Rejected'), { target: { value: 'Accepted' } })
    fireEvent.change(screen.getByLabelText('Gender'), { target: { value: 'Male' } })
    fireEvent.change(screen.getByLabelText('Country of Origin'), { target: { value: 'Poland' } })
    fireEvent.change(screen.getByLabelText('Motive'), { target: { value: 'Abuse' } })
    fireEvent.submit(submitButton)

    await waitFor(() => {
      expect(mockGetCases).toHaveBeenCalledTimes(1)
    })

    const case1NameElement = await screen.findByText('This the body of the case')
    expect(case1NameElement).toBeInTheDocument()

  })

  test('submits form with multiple results', async () => {
 
    const dataCases = [
      {      
        id: 1,      
        timestamp: new Date('2022-06-01T00:00:00Z'),
        gender: 'Male',       
        status: 'Accepted',     
        body: 'This is case 1',     
        country: 'United States',     
        keywords: ['keyword1', 'keyword2'],    
      },
      {
        id: 2,        
        timestamp: new Date('2022-06-02T00:00:00Z'),  
        gender: 'Female',   
        status: 'Rejected',    
        body: 'This is case 2',      
        country: 'Canada',     
        keywords: ['keyword3', 'keyword4'],
      }  
    ];

    mockGetCases.mockResolvedValue(dataCases);
  
    const submitButton = await screen.findByTestId('submit-button')
    fireEvent.submit(submitButton)
    
    for (const caseData of dataCases) {
        const caseElement = await screen.findAllByText((content, element) =>
        element.textContent === content , { content: caseData.body });
        expect(caseElement).toBeTruthy();
      }

  })

})