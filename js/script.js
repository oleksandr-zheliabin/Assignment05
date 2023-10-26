// GLOBAL VARIABLES

let empForm
let empId               // Employee ID TEXT BOX
let name                // Full Name TEXT BOX
let ext                 // Extension TEXT BOX
let email               // Email TEXT BOX
let department          // Department DropDown
let submit              // Add Employee BUTTON

// HELPER FUNCTION TO RETURN DOM ELEMENT
const $ = (id) => document.getElementById(id)

// GET THE DOM ELEMENTS
empId           = $('empForm.id')
name            = $('empForm.name')
ext             = $('empForm.ext')
email           = $('empForm.email')
department      = $('empForm.department')
submit          = $('empForm.submit')

// Handle the load event of the window object
window.addEventListener('load', (event) => {
    console.log('The page has fully loaded');
});

// 

console.log(empId + name)

submit.addEventListener('click', (e) => {

    e.preventDefault()
    console.log(parseFloat(empId.value) + parseFloat(name.value))
}
    )