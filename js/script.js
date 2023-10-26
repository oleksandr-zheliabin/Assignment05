// GLOBAL VARIABLES

let empForm             // Main Form
let empId               // Employee ID TEXT BOX
let name                // Full Name TEXT BOX
let ext                 // Extension TEXT BOX
let email               // Email TEXT BOX
let department          // Department DropDown
let submit              // Add Employee BUTTON

// HELPER FUNCTION TO RETURN DOM ELEMENT
const $ = (id) => document.getElementById(id)

empForm         = $('empForm')

// Handle the load event of the window object
window.addEventListener('load', (event) => {
    
// GET THE DOM ELEMENTS

empId           = $('id')
name            = $('name')
ext             = $('ext')
email           = $('email')
department      = $('department')
submit          = $('submit')

});

// Create an event listener that handles the form’s submission and prevent default behavior of the form

empForm.addEventListener('submit', (e) => {

    e.preventDefault()

// Collect all of the values from the form elements and display them within the console window

    console.log("ID: " + empId.value + "\n" +
                "Name: " + name.value + "\n" + 
                "Extension: " + ext.value + "\n" + 
                "Email: " + email.value + "\n" +
                "Department: " + department.value)
}
    )