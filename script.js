import { Validation } from "./validation.js";

// validation of employee name
function NameError() {
    const Name = document.getElementById('employeeName');
    const errorMessageName = document.getElementById('error-message-name');
    errorMessageName.textContent = Validation(Name)
}

// validation of employee designation
function designationError() {
    const Desgination = document.getElementById('designation');
    const errorMessageDesignation = document.getElementById('error-message-designation');
    errorMessageDesignation.textContent = Validation(Desgination)
}

// validation of employee salary
function SalaryError() {
    const Salary = document.getElementById('salary');
    const errorMessageSalary = document.getElementById('error-message-salary');
    errorMessageSalary.textContent = Validation(Salary)
}

document.getElementById('employeeName').addEventListener('blur', NameError);
document.getElementById('salary').addEventListener('blur', SalaryError);

export { designationError } 