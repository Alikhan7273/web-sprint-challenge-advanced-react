import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

  test("form header renders", () => {
    render(<CheckoutForm />);
    const header = screen.getByText(/checkout form/i);

    expect(header).toBeInTheDocument();
  });
 
test("form shows success message on submit with form details", () => {
  render(<CheckoutForm />);
  const firstNameInput = screen.getByPlaceholderText(/first name here/i);
  const lastNameInput = screen.getByPlaceholderText(/last name here/i);
  const addressInput = screen.getByPlaceholderText(/address here/i);
  const cityInput = screen.getByPlaceholderText(/city here/i);
  const stateInput = screen.getByPlaceholderText(/state here/i);
  const zipInput = screen.getByPlaceholderText(/zip code here/i);

  fireEvent.change(firstNameInput, {
    target: { name: "firstName", value: "Ali" },
  });
  fireEvent.change(lastNameInput, {
    target: { name: "lastName", value: "Khan" },
  });
  fireEvent.change(addressInput, {
    target: { name: "address", value: "5000 cook rd" },
  });
  fireEvent.change(cityInput, { target: { name: "city", value: "Houston" } });
  fireEvent.change(stateInput, { target: { name: "state", value: "Texas" } });
  fireEvent.change(zipInput, { target: { name: "zip", value: "77498" } });

  const submitButton = screen.getByTestId(/button/i);
  fireEvent.click(submitButton);

  const successMessage = screen.getByTestId(/successMessage/i);
  expect(successMessage).toBeInTheDocument();
  expect(firstNameInput).toBeInTheDocument(successMessage);
  expect(lastNameInput).toBeInTheDocument(successMessage);
  expect(addressInput).toBeInTheDocument(successMessage);
  expect(cityInput).toBeInTheDocument(successMessage);
  expect(stateInput).toBeInTheDocument(successMessage);
  expect(zipInput).toBeInTheDocument(successMessage);
});
