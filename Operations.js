import { employeeArray, displayEmployeeList } from "./EmployeeList.js"

//to remove an employee row from the record
function deleteFunction(index) {
    employeeArray.splice(index, 1)

    //displays table
    displayEmployeeList()
}

//edit the values of an employee
function EditRow(index) {

    //gets the employee which u choose to edit
    const employee = employeeArray[index];

    document.getElementById('employeeName').value = employee.name;
    document.getElementById('designation').value = employee.designation;
    document.getElementById('location').value = employee.location;
    document.getElementById('salary').value = employee.salary;
    document.querySelector(`input[name="gender"][value="${employee.gender}"]`).checked = true;

    // removes the specific element from list
    employeeArray.splice(index, 1)

    //displys by adding the employee to array 
    displayEmployeeList();
}

export { deleteFunction, EditRow }