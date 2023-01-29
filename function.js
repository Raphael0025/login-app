function reg(){
    let name = document.getElementById("fname").value
    alert("Hi " + name + " your account is Successfully Registered!")
    document.getElementById("fname").innerHTML = name
}
function reset_Pass(){
    let old = document.getElementById("oldPass").value
    let newPa = document.getElementById("newPass").value

    if(old === "" && newPa === ""){
        alert("Password reset unsuccessful")
    } else if(old === newPa){
        alert("Password reset was successful")
    }else {
        alert("Password reset was unsuccessful")
    }
}
function log(){
    let user = document.getElementById("uname").value
    let password = document.getElementById("pass").value
    
    if(user === "" && password === ""){
        alert("Login Unsuccessful!")
    } else {
        alert("Login Successful!")
    }
}