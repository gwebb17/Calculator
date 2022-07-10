//form validation//

function validateForm() {
    let fnamevar=document.forms["myForm"]["fname"].value;
    if (fnamevar=="") {
        alert("Name must be filled out");
        return false;
    }
}