function onSubmitSignUpForm(){


}

function onLogin(){
    var email=document.getElementById('loginInputEmail1').value
    var password=document.getElementById('loginInputPassword1').value
    if(email=="" || password==""){
        alert("Please fill all forms")
    }
    
    if(email=="admin@123.com"&&password=="Qwerty123"){
        localStorage.setItem("role","admin")
    }else{
        localStorage.setItem("role","user")
    }
    console.log("done")

}

function onAddProduct(){
    var productName=document.getElementById('newProductName').value
    var productPrice=document.getElementById('newProductPrice').value
    var newProductDescription=document.getElementById('newProductDescription').value
    var newProductImageUrl=document.getElementById('newProductImageUrl').value
    if(productName=="" || productPrice=="" || newProductDescription=="" || newProductImageUrl==""){
        alert("Fields cannot be empty")

    }

}


function verify(userEmail,password){
    if(userEmail == "admin@tismotech.com" && password=="password")
       localStorage.setItem("role","admin");
    else
       localStorage.setItem("role","user");
}

function validateLogin(){
   var userEmail = document.getElementById("loginInputEmail1").value;
   var password = document.getElementById("loginInputPassword1").value;
   if(userEmail=="")
       alert("Email Cannot be Empty");
   else if(!userEmail.endsWith(".com") )//|| !userEmail.endsWith(".in"))
       alert("Please Enter a valid Email")
   else if(password.length < 5 ){
       alert("Password needs atleast 5 characters");
   } 
   localStorage.removeItem("role");
   verify(userEmail,password);
}

function validateSignUp(){
   var userEmail = document.getElementById("inputEmail4").value;
   var password = document.getElementById("inputPassword4").value;
   if(userEmail=="")
       alert("Email Cannot be Empty");
   else if(!userEmail.endsWith(".com") )//|| !userEmail.endsWith(".in"))
       alert("Please Enter a valid Email")
   else if(password.length < 5 ){
       alert("Password needs atleast 5 characters");
   } 
}

