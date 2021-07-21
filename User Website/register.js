errorOnForm=false;

class User {
    constructor(email,password,firstName,lastName,age,address,phoneNumber,paymentType,color) {
        this.email = email;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.address = address;
        this.phoneNumber = phoneNumber;
        this.paymentType = paymentType;
        this.color = color;
        console.log("This is the constructor User function.");
    }
}

function registerUser(){
    console.log("Button Clicked!");

    let email=$("#txtEmail").val();
    let password=$("#txtPassword").val();
    let firstName=$("#txtFirst").val();
    let lastName=$("#txtLast").val();
    let age=$("#txtAge").val();
    let address=$("#txtAddress").val();
    let phoneNumber=$("#txtPhone").val();
    let paymentType=$("#selPayment").val();
    let color=$("#selColor").val();

    let user=new User(email,password,firstName,lastName,age,address,phoneNumber,paymentType,color);
    saveUser(user); //from storageManager.js
    setNavInfo();
    clearForm();
    console.log("it worked");

    //create object constructer for user
    //create a user object with data from the input fields
    //console.log the object
}

function clearForm(){
// homework: clear every input field
    // set the select to first element
    // set the color back to black
    // file organization
}

function changeColor(){
    let color=$("#selColor").val();
    $("#hForm").css("color", color);
}

function validateEmail(){
    let txtEmail=$("#txtEmail");
    let email=txtEmail.val();
    
    if(email.length < 5){
        txtEmail.css('border', '2px solid red');
        displayError("Error: Email invalid")
    }
    else{
        txtEmail.css('border', '1px solid rgb(133,133,133)');
        hideError();
    }
}
function validatePass(){
    let txtPass=$("#txtPassword");
    let password=txtPass.val();
    
    if(password.length < 5){
        txtPass.css('border', '2px solid red');
        displayError("Error: Password too short");
    }
    else{
        txtPass.css('border', '1px solid rgb(133,133,133)');
        hideError();
    }
}
function validateFirstName(){
    let txtFirstName=$("#txtFirst");
    let firstName=txtFirstName.val();
    
    if(firstName < 1){
        txtFirstName.css('border', '2px solid red');
        displayError("Error: Need First Name");
    }
    else{
        txtFirstName.css('border', '1px solid rgb(133,133,133)');
        hideError();
    }
}
function validateLastName(){
    let txtLastName=$("#txtLast");
    let lastName=txtLastName.val();
    
    if(lastName < 1){
        txtLastName.css('border', '2px solid red');
        displayError("Error: Need Last Name");
    }
    else{
        txtLastName.css('border', '1px solid rgb(133,133,133)');
        hideError();
    }
}


function displayError(text){
    $("#alertError").removeClass('hide').text(text);
    $("#btnSave").attr('disabled', true);
    errorOnForm=true;
}
function hideError(){
    $("#alertError").addClass('hide');
    $("#btnSave").attr('disabled', false);
    errorOnForm=false;
}

function init(){
    

    
    $("#selColor").change(changeColor);
    $("#txtEmail").change(validateEmail);
    $("#txtPassword").change(validatePass);
    $("#txtFirst").change(validateFirstName);
    $("#txtLast").change(validateLastName);
    $("#btnSave").click(registerUser);
    console.log("register page");
}
window.onload=init;