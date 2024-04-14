import { designationError } from "./script.js";

//sets the designation field 
function getDesignation() {
    const designation = document.getElementById('designation');
    switch (designation.value) {
        case "1":
            designation.value = "Office Manager";
            break;
        case "2":
            designation.value = "Administrative assistant";
            break;
        case "3":
            designation.value = "Intern";
            break;
        case "4":
            designation.value = "Accountant";
            break;
        case "5":
            designation.value = "Customer Service Representative";
            break;
    }
    designationError()
}

document.getElementById('designation').addEventListener("blur", getDesignation);
