import { deleteFunction, EditRow } from "./Operations.js";

export let employeeArray = [];

function AppendEmployee(name, designation, location, salary, gender) {
    let employeeObj = { name, designation, location, salary, gender }
    employeeArray.push(employeeObj)

    // to display employee list as a table
    displayEmployeeList()
}

function displayEmployeeList() {

    // checking for previous table existence
    if (document.getElementById('result') != null) {
        document.getElementById('result').remove()
    }

    // creating a table
    const table = document.createElement('table');
    table.setAttribute('id', 'result')

    // creating a table head
    tableHeadingCreation(table)

    //appending employee rows from employee arrays
    tableItemCreation(table)

    // appending table to html
    document.getElementById('table-display').appendChild(table)

}

function tableHeadingCreation(table) {
    // creating a table head
    const head = document.createElement('th')
    head.setAttribute('colspan', 7)
    head.textContent = "Employee List"
    table.appendChild(head)

    // creating a header row
    if (employeeArray.length > 0) {
        const headerRow = document.createElement('tr');
        headerRow.setAttribute('id', 'heading-tab')
        Object.keys(employeeArray[0]).forEach(key => {
            const th = document.createElement('td');
            th.appendChild(document.createTextNode(key))
            headerRow.appendChild(th)
        })

        //appending a options column to header
        const optionHead = document.createElement('td');
        optionHead.appendChild(document.createTextNode('Options'));
        headerRow.appendChild(optionHead)

        //appending headings to table
        table.appendChild(headerRow)
    }
}

function tableItemCreation(table) {

    //appending employee rows from employee arrays
    employeeArray.forEach((item, index) => {
        const row = document.createElement('tr')
        Object.values(item).forEach(value => {
            const td = document.createElement('td');
            td.appendChild(document.createTextNode(value))
            row.appendChild(td);
        })

        //adding buttons of edit and delete to the employee table
        const optionHead = document.createElement('td');

        //container to gold two buttons
        const buttonContainer = document.createElement('div');
        buttonContainer.setAttribute('id', 'buttonLayout');

        //edit button creation
        editBtnCreation(buttonContainer, index)

        //delete button creation
        deleteBtnCreation(buttonContainer, index)

        //appending buttons to container
        optionHead.appendChild(buttonContainer);
        row.appendChild(optionHead)

        table.appendChild(row)
    })


}

function editBtnCreation(buttonContainer, index) {
    const editbutton = document.createElement('button');
    editbutton.setAttribute('id', 'editBtn')
    editbutton.setAttribute('class', 'options')
    editbutton.textContent = 'Edit'
    editbutton.addEventListener('click', () => {
        window.scrollBy({ top: -800, behavior: "smooth" });
        //function call for editing the employee data
        EditRow(index);
    });
    buttonContainer.appendChild(editbutton)
}


function deleteBtnCreation(buttonContainer, index) {
    const deletebutton = document.createElement('button');
    deletebutton.setAttribute('id', 'deleteBtn');
    deletebutton.setAttribute('class', 'options');
    deletebutton.textContent = 'Delete';
    //function call for deleting the employee data
    deletebutton.addEventListener('click', () => deleteFunction(index));
    buttonContainer.appendChild(deletebutton);
}

export { AppendEmployee, displayEmployeeList }
