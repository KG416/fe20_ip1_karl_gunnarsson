// Form validation START
//Visar felmeddelande om man submittar utan
//att skriva något namn

// Källa 1: Net Ninja Simple form validation
// Länk: https://www.youtube.com/watch?v=b0pxAb_yy2U&list=PL4cUxeGkcC9i9Ae2D9Ee1RvylH38dKuET&index=45

// Källa 2: Styling/design
// Länk: https://webdesign.tutsplus.com/tutorials/bring-your-forms-up-to-date-with-css3-and-html5-validation--webdesign-4738

var form = document.forms.form;
var message = document.getElementById("message");

form.onsubmit = function () {

    if (form.username.value == "") {
        message.innerHTML = "Please enter a name before you submit";
        return false;
    } else {
        message.innerHTML = "";
        return true;
    }

};
// // Form validation SLUT