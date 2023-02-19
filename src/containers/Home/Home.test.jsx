import { render, screen } from "@testing-library/react";
import { Home } from "./Home";
import { BrowserRouter } from "react-router-dom";

test("Home page renders", async () => {
  //Arrange
  //Render our Home page container component
  // Wrap it in a browser router to satisfy the test gods because it contains <Link />s
  render(<Home />, { wrapper: BrowserRouter });
  //Act
  const homePage = await screen.findAllByTestId("Home");
  //Assert
  expect(homePage).toBeTruthy();
});
