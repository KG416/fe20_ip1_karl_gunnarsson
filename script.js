// Form validation START
// Källa: Net Ninja Simple form validation
URL: https://www.youtube.com/watch?v=b0pxAb_yy2U&list=PL4cUxeGkcC9i9Ae2D9Ee1RvylH38dKuET&index=45

var form = document.forms.form;
var message = document.getElementById("message");

form.onsubmit = function () {

    if (form.username.value == "") {
        message.innerHTML = "Why didn't it work? Because you didn't enter a username";
        return false;
    } else {
        message.innerHTML = "";
        return true;
    }

};
// // Form validation SLUT