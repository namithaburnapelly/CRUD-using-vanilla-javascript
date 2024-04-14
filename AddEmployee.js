import { AppendEmployee, displayEmployeeList } from "./EmployeeList.js";

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById('myForm').addEventListener('submit', AddEmployee)
    return false
})

function AddEmployee(event) {
    // event.preventDefault();
    const name = document.getElementById('employeeName').value;
    const designation = document.getElementById('designation').value;
    const location = document.getElementById('location').value;
    const salary = document.getElementById('salary').value;
    const gender = document.querySelector("input[type='radio'][name='gender']:checked").value;
    const form = document.getElementById('myForm');

    // to add employee details to an array
    AppendEmployee(name, designation, location, salary, gender)

    form.reset();

    window.scrollBy({ top: 800, behavior: "smooth" });
}