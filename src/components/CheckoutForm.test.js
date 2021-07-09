import React from "react";
import { screen, render, waitFor } from "@testing-library/react"; //waitFor is included for Snippet 2 below, which is commented because it fails.
import userEvent from '@testing-library/user-event';
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm />)
    const formHeader = screen.getByText(/checkout form/i);
    expect(formHeader).toBeInTheDocument();
});

test("form shows success message on submit with form details", async () => {
    render(<CheckoutForm />)
    const firstNameInput = screen.getByLabelText(/first name:/i);
    const lastNameInput = screen.getByLabelText(/last name:/i);
    const addressInput = screen.getByLabelText(/address:/i);
    const cityInput = screen.getByLabelText(/city:/i);
    const stateInput = screen.getByLabelText(/state:/i);
    const zipInput = screen.getByLabelText(/zip:/i);
    const submitButton = screen.getByRole("button");

    userEvent.type(firstNameInput, "Jane");
    userEvent.type(lastNameInput, "Doe");
    userEvent.type(addressInput, "123 Main Street");
    userEvent.type(cityInput, "Anytown");
    userEvent.type(stateInput, "PA");
    userEvent.type(zipInput, "19999");
    userEvent.click(submitButton);
// The following block (looking for values that should NOT be on the form) will fail, lending credence to the block below it (looking for values that SHOULD be on the form)
    // const successMsg0 = await screen.getByText(/you have not ordered some plants!/i);
    // const firstNameDisplay0 = await screen.getByText(/notjane/i);
    // const lastNameDisplay0 = await screen.getByText(/notdoe/i);
    // const addressDisplay0 = await screen.getByText(/12345 main street/i);
    // const cityDisplay0 = await screen.getByText(/anytowne/i);
    // const stateDisplay0 = await screen.getByText(/ut/i);
    // const zipDisplay0 = await screen.getByText(/19998/i);

// I would have expected Snippet 1 and Snippet 2 below to both work, but they did not. This one does, even without "await". It might not be reliable because I thought "findBy..." was supposed to be used with "await".
    const successMsg = await screen.getByText(/you have ordered some plants!/i);
    const firstNameDisplay = await screen.getByText(/jane/i);
    const lastNameDisplay = await screen.getByText(/doe/i);
    const addressDisplay = await screen.getByText(/123 main street/i);
    const cityDisplay = await screen.getByText(/anytown/i);
    const stateDisplay = await screen.getByText(/pa/i);
    const zipDisplay = await screen.getByText(/19999/i);

    expect(firstNameDisplay).toBeInTheDocument(true);
    expect(lastNameDisplay).toBeInTheDocument(true);
    expect(addressDisplay).toBeInTheDocument(true);
    expect(cityDisplay).toBeInTheDocument(true);
    expect(stateDisplay).toBeInTheDocument(true);
    expect(successMsg).toBeInTheDocument(true);
    expect(zipDisplay).toBeInTheDocument(true);

// Snippet 1
    // const successMsg2 = await screen.findByText(/you have ordered some plants!/i);
    // const successMsg2 = await screen.findByText(/you have ordered some plants!/i);
    // const firstNameDisplay2 = await screen.findByText(/jane/i);
    // const lastNameDisplay2 = await screen.findByText(/doe/i);
    // const addressDisplay2 = await screen.findByText(/123 main street/i);
    // const cityDisplay2 = await screen.findByText(/anytown/i);
    // const stateDisplay2 = await screen.findByText(/pa/i);
    // const zipDisplay2 = await screen.findByText(/19999/i);
    // 
    // expect(successMsg2).toBeInTheDocument(true);
    // expect(firstNameDisplay2).toBeInTheDocument(true);
    // expect(lastNameDisplay2).toBeInTheDocument(true);
    // expect(addressDisplay2).toBeInTheDocument(true);
    // expect(cityDisplay2).toBeInTheDocument(true);
    // expect(stateDisplay2).toBeInTheDocument(true);
    // expect(zipDisplay2).toBeInTheDocument(true);

// Snippet 2
    // await waitFor(()=> {
    //     const successMsg3 = screen.getByText(/you have ordered some plants!/i);
    //     const firstNameDisplay3 = screen.getByText(/jane/i);
    //     const lastNameDisplay3 = screen.getByText(/doe/i);
    //     const addressDisplay3 = screen.getByText(/123 main street/i);
    //     const cityDisplay3 = screen.getByText(/anytown/i);
    //     const stateDisplay3 = screen.getByText(/pa/i);
    //     const zipDisplay3 = screen.getByText(/19999/i);
    //   
    //     expect(successMsg3).toBeInTheDocument(true);
    //     expect(firstNameDisplay3).toBeInTheDocument(true);
    //     expect(lastNameDisplay3).toBeInTheDocument(true);
    //     expect(addressDisplay3).toBeInTheDocument(true);
    //     expect(cityDisplay3).toBeInTheDocument(true);
    //     expect(stateDisplay3).toBeInTheDocument(true);
    //     expect(zipDisplay3).toBeInTheDocument(true);  
    // });
});
