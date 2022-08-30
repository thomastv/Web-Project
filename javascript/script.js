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