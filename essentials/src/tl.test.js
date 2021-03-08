import {fireEvent, render} from "@testing-library/react"
import React from 'react'
import Check from "./check"

test("renders", ()=>{
    const {getByText} = render(<Check/>)
    const h1 = getByText(/Elegir pan/)
    expect(h1).toHaveTextContent("Elegir pan")
})

// testeando hooks
test("seleccion en checkbox", ()=>{
    const {getByLabelText}= render(<Check/>)
    const checkbox = getByLabelText(/Sin pan/);
    fireEvent.click(checkbox);
    expect(checkbox.checked).toEqual(true)
})