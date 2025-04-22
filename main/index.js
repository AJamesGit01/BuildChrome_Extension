// Log out "Button clicked!" when the user clicks the "SAVE INPUT" button

// let inputBtn = document.getElementById("input-btn")

// inputBtn.addEventListener("click", function() {
//     console.log("Button clicked from addEventListener")
// })

// Refactor the code so that it uses .addEventListener()
// when you click the SAVE INPUT button

// let inputBtn = document.getElementById("input-btn")

// inputBtn.addEventListener("click", function() {
//     console.log("Button clicked!")
// })

//-------------------------------------------------------------------------------//

// Create two variables:
// myLeads -> should be assigned to an empty array
// inputEl -> should be assigned to the text input field

// let myLeads = []
// const inputEl = document.getElementById("input-el")
// const inputBtn = document.getElementById("input-btn")

// // Push the value "www.awesomelead.com" to myArray when the input button is clicked
//     // instead of the hard-coded "www.awesomeleads.com" value
//     // Google -> "get value from input field javascript"

// inputBtn.addEventListener("click", function() {
//     myLeads.push("www.awesomelead.com")
//     console.log(myLeads)
// })

//-------------------------------------------------------------------------------//

// let myLeads = [] 
// const inputEl = document.getElementById("input-el")
// const inputBtn = document.getElementById("input-btn")

// inputBtn.addEventListener("click", function() {
    // Push the value from the inputEl into the myLeads array
    // const inputValue = inputEl.value // -----> The varible Get the value from the input field 
    // instead of the hard-coded "www.awesomeleads.com" value
    // Google -> "get value from input field javascript"
    // myLeads.push(inputValue) //------> Push the value from the variable into the myLeads array
    
    // myLeads.push(inputEl.value) // Push the value from the inputEl into the myLeads array without the variable

    // console.log(myLeads) // Log the myLeads array to the console
// })

//-------------------------------------------------------------------------------//

// Use for loop to log out all the items in the myLeads array

// let myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"]
// const inputEl = document.getElementById("input-el")
// const inputBtn = document.getElementById("input-btn")
// 2. Grab the unordered list and store it in a const variable called ulEl
// const ulEl = document.getElementById("ul-el")

// console.log(ulEl) // Log the ulEl to the console

// inputBtn.addEventListener("click", function() {
//     myLeads.push(inputEl.value)
//     console.log(myLeads) 
// }) // Log out the items in the myLeads array using a for loop 

// Render the leads in the unordered list using ulEl.textContent

// for (let i = 0; i < myLeads.length; i++) {
    //  ulEl.textContent += myLeads[i] + " "  // Add the lead to the unordered list

    // Replace .textContent with .innerHTML and use <li> tags
    // ulEl.innerHTML += "<li>" + myLeads[i] + "</li>" // Add the lead to the unordered list using innerHTML

    // console.log(myLeads[i]) // Log out the items in the myLeads array using a for loop

        // create element
    // set text content
    // append to ul
//     const li = document.createElement("li")
//     li.textContent = myLeads[i]
//     ulEl.append(li)
// } 

//-------------------------------------------------------------------------------//

// let myLeads = `["www.awesomelead.com"]`

// 1. Turn the myLeads string into an array
// myLeads = JSON.parse(myLeads)
// 2. Push a new value to the array
// myLeads.push("www.new-value.com")
// 3. Turn the array into a string again
// myLeads = JSON.stringify(myLeads)
// 4. Console.log the string using typeof to verify that it's a string
// console.log(myLeads)

//-------------------------------------------------------------------------------//

// let myLeads = []

// let myLeads = `["www.awesomelead.com"]`
// myLeads = JSON.parse(myLeads)

// myLeads.push("www.epiclead.com")

// myLeads = JSON.stringify(myLeads)

// console.log(typeof myLeads) // Log the type of myLeads to the console which is string 

// console.log(myLeads)

//-------------------------------------------------------------------------------//


let myLeads = []

const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
// 1. Store the delete button in a deleteBtn variable

// ["lead1", "lead2"] or null

// Get the leads from the localStorage
// Store it in a variable, leadsFromLocalStorage
// Log out the variable

const leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") )
console.log(leadsFromLocalStorage)

// 1. Check if leadsFromLocalStorage is truthy
// 2. If so, set myLeads to its value and call renderLeads()

deleteBtn.addEventListener("dblclick", function() {
    console.log("Deleted all the leads")
    localStorage.clear() // Clear the localStorage
    myLeads = [] // Set myLeads to an empty array
    renderLeads()
})

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage // Set myLeads to its value and call renderLeads()
    renderLeads()
}

// console.log( localStorage.getItem("myLeads") )

// 1. Save a key-value pair in localStorage
// 2. Refresh the page. Get the value and log it to the console
// 3. Clear localStorage

// localStorage.setItem("myName", "Allen James Datuin")

// let name = localStorage.getItem("myName")
// console.log(name)

// localStorage.setItem("myLeads", "www.awesomelead.com")
// console.log( localStorage.getItem("myLeads") ) // Log the value of myLeads to the console
// localStorage.clear()

// HINTS:
// localStorage.setItem(key, value)
// localStorage.getItem(key)
// localStorage.clear()
// PS: both key and value need to be strings

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)

    // Clear out the input field
    inputEl.value = ""

    // Save the myLeads array to localStorage 
    // PS: remember JSON.stringify()

    localStorage.setItem("myLeads", JSON.stringify(myLeads) )

    // 2. Call the renderLeads() function
    renderLeads()

    // To verify that it works:

    console.log( localStorage.getItem("myLeads")) // Log the value of myLeads to the console saving it to localStorage

    console.log(myLeads)
})

// 1. Create a variable, listItems, to hold all the HTML for the list items
// Assign it to an empty string to begin with

// 1. Wrap the code below in a renderLeads() function

function renderLeads() {

    let listItems = ""

    for (let i = 0; i < myLeads.length; i++) {

        // Wrap the lead in an anchor tag (<a>) inside the <li>
        // Can you make the link open in a new tab?

        // listItems += "<li><a target='_blank' href='https://www.google.com/" + myLeads[i] + "'>" + myLeads[i] + "</a></li>"
        listItems += `
        <li>
            <a target='_blank' href='${myLeads[i]}'>
                ${myLeads[i]}
            </a>
        </li>
    `

        // Add the item to the listItems variable instead of the ulEl.innerHTML
        // listItems += "<li>" + myLeads[i] + "</li>"
    }
        // Render the listItems inside the unordered list using ulEl.innerHTML
    
    ulEl.innerHTML = listItems // Render the listItems inside the unordered list using ulEl.innerHTML   
 
}

