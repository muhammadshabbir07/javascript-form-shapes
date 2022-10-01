var validName=/^[A-Za-z]+$/;
function submit() {
    firstNameCheck()
    lastNameCheck()
    emailCheck()
    numberCheck()
    zipcodeCheck()
    passwordCheck()
}
function checkFirstName(){
    firstNameCheck()
}

function checkLastName(){
    lastNameCheck()
}

function checkEmail(){
    emailCheck()
}

function checkNumber(){
    numberCheck()
}

function checkZipCode(){
    zipcodeCheck()
}

function checkPassword(){
    passwordCheck()
}

function checkConfirmPassword(){
    passwordCheck()
}



function firstNameCheck() {
    var getFirstName = document.getElementById("firstName");
    var firstNameError = document.getElementById("firstNameError");

    if (getFirstName.value == '') {
        firstNameError.innerHTML = "First Name is Required"
        firstNameError.style.display = "block"
        firstNameError.style.color = "red";
    }
    else if(!validName.test(getFirstName.value)){
        firstNameError.innerHTML = "First Name only String without White Spaces"
        firstNameError.style.display = "block"
        firstNameError.style.color = "red";
    }
    else {
        firstNameError.innerHTML = ""
        return true
    }
}

function lastNameCheck() {
    var getLastName = document.getElementById("lastName");
    var LastNameError = document.getElementById("lastNameError");

    if (getLastName.value == '') {
        LastNameError.innerHTML = "Last Name is Required"
        LastNameError.style.display = "block"
        LastNameError.style.color = "red";
    }
    else if(!validName.test(getLastName.value)){
        LastNameError.innerHTML = "Last Name only String without White Spaces"
        LastNameError.style.display = "block"
        LastNameError.style.color = "red";
    }
    else {
        LastNameError.innerHTML = ""
        return true
    }
}

function emailCheck(){
    var getEmail = document.getElementById("email").value;
    var emailError = document.getElementById("emailError");
    var convertEmail = new String(getEmail);

    if (getEmail == '') {
        emailError.innerHTML = "Email Address is Required"
        emailError.style.display = "block"
        emailError.style.color = "red";
    }
    else {
        for (let i = 0; i < convertEmail.length; i++) {
            const element = convertEmail[i];
            // console.log(element)
            if(!element.match("@")){
                emailError.innerHTML = "Email Address must be in valid formate with @ symbol"
                emailError.style.display = "block"
                emailError.style.color = "red";
            }
            else{
                emailError.innerHTML = ""
                return true
            }
        }
    }
}

function numberCheck(){
    var getnumber = document.getElementById("number").value;
    var numberError = document.getElementById("numberError");

    if (getnumber == '') {
        numberError.innerHTML = "Number is Required"
        numberError.style.display = "block"
        numberError.style.color = "red";
    }
    else if(!isFinite(getnumber) === true){
        numberError.innerHTML = "found string type number only"
        numberError.style.display = "block"
        numberError.style.color = "red";
    }
    else if (getnumber.length > 11) {
        numberError.innerHTML = "Number is above 11 numbers"
        numberError.style.display = "block"
        numberError.style.color = "red";
    }
    else{
        numberError.innerHTML = ""
        return true
    }
}


function zipcodeCheck(){
    var getzipcode = document.getElementById("zipcode").value;
    var zipcodeError = document.getElementById("zipcodeError");

    if (getzipcode == '') {
        zipcodeError.innerHTML = "Zip Code is Required"
        zipcodeError.style.display = "block"
        zipcodeError.style.color = "red";
    }
    else if(!isFinite(getzipcode) === true){
        zipcodeError.innerHTML = "found string type number only"
        zipcodeError.style.display = "block"
        zipcodeError.style.color = "red";
    }
    else if (getzipcode.length > 5) {
        zipcodeError.innerHTML = "Zip Code is under 5 numbers"
        zipcodeError.style.display = "block"
        zipcodeError.style.color = "red";
    }
    else{
        zipcodeError.innerHTML = ""
        return true
    }
}

function passwordCheck(){
    var getPassword = document.getElementById("password").value;
    var getconfirmPassword = document.getElementById("confirmPassword").value;

    var passwordError = document.getElementById("passwordError");
    var confirmPasswordError = document.getElementById("confirmPasswordError");


    if (getPassword == '' && getconfirmPassword == '') {
        passwordError.innerHTML = "Password is Required"
        passwordError.style.display = "block"
        passwordError.style.color = "red";

        confirmPasswordError.innerHTML = "Confirm Password is Required"
        confirmPasswordError.style.display = "block"
        confirmPasswordError.style.color = "red";
    }
    else if (getPassword != getconfirmPassword) {
        passwordError.innerHTML = "Password is not match Confirm Password"
        passwordError.style.display = "block"
        passwordError.style.color = "red";

        confirmPasswordError.innerHTML = "Confirm Password is not match Password"
        confirmPasswordError.style.display = "block"
        confirmPasswordError.style.color = "red";
    }
    else{
        confirmPasswordError.innerHTML = ""
        passwordError.innerHTML = ""
        return true
    }
}



function square() {
    var getSquare = document.getElementById("shapes");
    getSquare.style.borderRadius = "unset";
    getSquare.style.height = "300px";
}

function circle() {
    var getSquare = document.getElementById("shapes");
    getSquare.style.borderRadius = "50%";
    getSquare.style.height = "300px";
}

function rectangle() {
    var getSquare = document.getElementById("shapes");
    getSquare.style.height = "150px";
    getSquare.style.borderRadius = "unset";
}

// function triangle(){
//     var getSquare = document.getElementById("shapes");
//     getSquare.style.borderBottom = "solid 300px rgb(200,30,50)"
//     getSquare.style.borderLeft = "solid 150px transparent"
//     getSquare.style.borderRight = "solid 150px transparent"
//     getSquare.style.backgroundColor = "transparent"
// }