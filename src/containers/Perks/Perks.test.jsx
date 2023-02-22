import { fireEvent, render, screen } from "@testing-library/react";
import { Perks } from "./Perks";
import { MockedProvider } from "@apollo/client/testing";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
const user = userEvent.setup();

test("Home page renders", async () => {
  //Arrange
  //Render our Perks component
  render(
    <MockedProvider>
      <BrowserRouter>
        <Perks />
      </BrowserRouter>
    </MockedProvider>
  );
  //Act
  const perksPage = await screen.findAllByTestId("perks-component");
  //Assert
  expect(perksPage).toBeTruthy();
});

test("Filters are hidden on load", async () => {
  //Arrange
  //Render our Perks component
  render(
    <MockedProvider>
      <BrowserRouter>
        <Perks />
      </BrowserRouter>
    </MockedProvider>
  );
  //Act
  const filtersRow = await screen.findByTestId("filters-row");
  //Assert
  expect(filtersRow).not.toHaveClass(".show");
});

test("Filter Button Renders dropdowns on click", async () => {
  //Arrange
  //Render our Perks component
  render(
    <MockedProvider>
      <BrowserRouter>
        <Perks />
      </BrowserRouter>
    </MockedProvider>
  );
  //Act
  const filtersRow = await screen.findByTestId("filters-row");
  const filtersButton = await screen.findByTestId("filters-button");
  await user.click(filtersButton);
  //Assert
  expect(filtersRow).toHaveClass("show");
});

test("Search Button Renders field on click", async () => {
  //Arrange
  //Render our Perks component
  render(
    <MockedProvider>
      <BrowserRouter>
        <Perks />
      </BrowserRouter>
    </MockedProvider>
  );
  //Act
  const searchRow = await screen.findByTestId("search-row");
  const searchButton = await screen.findByTestId("search-button");
  await user.click(searchButton);
  //Assert
  expect(searchRow).toHaveClass("show");
});
