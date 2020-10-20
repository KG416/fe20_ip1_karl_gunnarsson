//Form validation START
//Shows red error message if user submits without name or email

// Source: Net Ninja Simple Form Validation
// https://www.youtube.com/watch?v=b0pxAb_yy2U&list=PL4cUxeGkcC9i9Ae2D9Ee1RvylH38dKuET&index=45

var form = document.forms.form;
var message = document.getElementById("message");

form.onsubmit = function () {
    if (form.username.value === "") {
        message.innerHTML = "Please enter a name before you send request";
        return false;
    } else if (form.email.value === "") {
        message.innerHTML = "Please enter your email before send request";
        return false;
    }
    else {
        message.innerHTML = "";
        return true;
    }
};
// Form validation SLUT