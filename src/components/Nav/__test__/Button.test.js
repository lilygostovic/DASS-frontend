
import { render, screen, fireEvent } from "@testing-library/react";
import { FilterButton } from '../../Button'

describe("FilterButton component", () => {
  test("renders the component with the correct text", () => {
    const text = "Filter";
    render(
      <FilterButton
        text={text}
        isSelected={false}
        onClick={() => {}}
        selectColor="blue"
        deselectColor="grey"
      />
    );

    const buttonElement = screen.getByText(text);
    expect(buttonElement).toBeInTheDocument();

  });

  test("calls the onClick function when clicked", () => {
    const onClick = jest.fn();
    render(
      <FilterButton
        text="Filter"
        isSelected={false}
        onClick={onClick}
        selectColor="blue"
        deselectColor="grey"
      />
    );

    const buttonElement = screen.getByText("Filter");
    fireEvent.click(buttonElement);

    expect(onClick).toHaveBeenCalledTimes(1);
  });

  test("renders the component with the correct styles when selected", () => {
    const text = "Filter";
    render(
      <FilterButton
        text={text}
        isSelected={true}
        onClick={() => {}}
        selectColor="blue"
        deselectColor="grey"
      />
    );

    const buttonElement = screen.getByText(text);
    expect(buttonElement).toHaveStyle(`
      color: black;
      border: 5px outset blue;
    `);
  });

})