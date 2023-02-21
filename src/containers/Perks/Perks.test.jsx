import { fireEvent, render, screen } from "@testing-library/react";
import { Perks } from "./Perks";
import { MockedProvider } from "@apollo/client/testing";
import { BrowserRouter } from "react-router-dom";

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
  const filtersToggle = await screen.findByTestId("filters-toggle");
  const killersDropdown = await screen.findByTestId("killers-dropdown");
  const survivorsDropdown = await screen.findByTestId("survivors-dropdown");
  //Assert
  expect(fireEvent.click(filtersToggle)).toBeTruthy;
});
