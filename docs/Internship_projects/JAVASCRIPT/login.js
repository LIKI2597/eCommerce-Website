let form=document.getElementById("login-form");
let mail=document.getElementById("mail");
let pass=document.getElementById("pass");

let mailError=document.getElementById("mailError");
let passError=document.getElementById("passError");
let loginError=document.getElementById("loginError");

form.addEventListener('submit',(e)=>{
    mailError.textContent='';
    passError.textContent='';
    loginError.textContent='';

    e.preventDefault();
    let isValid=true;

    // Email
    let emailValue = mail.value.trim();
    if (!emailValue) {
        mailError.textContent = "Enter the mail id";
        isValid = false;
    } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(emailValue)) {
        mailError.textContent = "Enter valid email id";
        isValid = false;
    }

    // Password
    let passValue = pass.value.trim();
    if (!passValue) {
        passError.textContent = "Password cannot be empty";
        isValid = false;
    } else if (!/(?=.*[A-Z])/.test(passValue)) {
        passError.textContent = "Password must include one uppercase letter";
        isValid = false;
    } else if (!/(?=.*\d)/.test(passValue)) {
        passError.textContent = "Password must include one number";
        isValid = false;
    } else if (!/(?=.[&#@])/.test(passValue)) {
        passError.textContent = "Password must include one special character (&, *, #, @)";
        isValid = false;
    }

    if(isValid){
        let user=JSON.parse(localStorage.getItem('userData'));
        if(!user){
            return alert("no user found, please signup");
        }
        if(emailValue==user.email && passValue==user.password){
            alert("Login succussfully");
            window.location.href="../HTML/home1.html";
        }else if(emailValue==user.email && passValue!=user.password){
            loginError.textContent="wrong password";
        }else if(emailValue!=user.email && passValue==user.password){
            loginError.textContent="wrong email";
        }else if(emailValue!=user.email && passValue!=user.password){
            loginError.textContent="wrong eamil and password";
        }
        

    }


})