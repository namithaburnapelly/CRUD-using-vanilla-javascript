import { noErrorMsg, NameErrorMsg, designationErrorMsg, SalaryErrorMsg } from "./ErrorMessage.js";

export function Validation(constraint) {

    //regular expression for name and designation
    let Nameregex = /^[a-zA-Z]+(?:[\s][a-zA-Z]+)*$/;
    //regualr expression for salary
    let salaryregex = /^[0-9]*$/

    switch (constraint.id) {
        case "employeeName":
            if (!(constraint.value.match(Nameregex))) {
                return NameErrorMsg;
            }
            break;
        case "designation":
            if (!(constraint.value.match(Nameregex))) {
                return designationErrorMsg;
            }
            break;
        case "salary":
            if (!(constraint.value.match(salaryregex))) {
                return SalaryErrorMsg;
            }
            break;
        default:
            return noErrorMsg;
    }
}
