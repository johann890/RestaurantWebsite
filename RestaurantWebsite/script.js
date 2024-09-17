/* FAQ form */
function validateForm() {
    var x = document.forms["FAQ"]["headline"].value; /* Get the heading and answer values to make sure they are not empty */
    var y = document.forms["FAQ"]["message"].value;
    if (x != "" && y != "") { /* If any are empty then return error */
        alert("'" + x + "'" + "Question submitted!")
    } else {
        alert("Please fully enter details for both boxes.")
    }
}

/* Top account creation form in register page */
function regForm() {
    var user = document.forms["reg"]["username"].value;
    /* Make sure the username is not empty of the registration form, other values have a required field. 
       We grab the name to then return it back on the alert screen */
    if (user != "") {
        alert("Welcome to Lukaria " + user + "!")
    } else {
        alert("Please fully enter details for all boxes.")
    }
}

/* Detail booking form in register page */
function detForm() {
    var credit = document.forms["detail"]["creditnum"].value;
    var name = document.forms["detail"]["creditnam"].value; 
    /* Make sure the credit/name are there, rest fields are required or placeholders are given*/
    if (credit != "" && name != "") {
        alert("Your booking has been confirmed + " + name + "! Thank you!")
    } else {
        alert("Please fully enter details for all boxes.")
    }
}