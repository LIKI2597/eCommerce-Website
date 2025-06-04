let form = document.getElementById('signup-form');
let un = document.getElementById('username');
let pass = document.getElementById('password');
let cpass = document.getElementById('Cpassword');
let num = document.getElementById('num');
let mail = document.getElementById('mail');
let dob = document.getElementById('date');

let unError = document.getElementById('usernameError');
let passError = document.getElementById('passwordError');
let cpassError = document.getElementById('CpasswordError');
let mailError = document.getElementById('mailError');
let numError = document.getElementById('numError');
let genError = document.getElementById('genderError');
let dateError = document.getElementById('dateError');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Reset all errors
    unError.textContent = "";
    passError.textContent = "";
    cpassError.textContent = "";
    mailError.textContent = "";
    numError.textContent = "";
    genError.textContent = "";
    dateError.textContent = "";

    let isValid = true;

    // Username
    let usernameValue = un.value.trim();
    if (!usernameValue) {
        unError.textContent = "Username cannot be empty";
        isValid = false;
    } else if (usernameValue.length < 3) {
        unError.textContent = "Username must be at least 3 characters";
        isValid = false;
    } else if (usernameValue.length > 15) {
        unError.textContent = "Username must be no more than 15 characters";
        isValid = false;
    } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(usernameValue)) {
        unError.textContent = "Username must include uppercase, lowercase, and number";
        isValid = false;
    }

    // Password
    let passwordValue = pass.value.trim();
    if (!passwordValue) {
        passError.textContent = "Password cannot be empty";
        isValid = false;
    } else if (!/(?=.*[A-Z])/.test(passwordValue)) {
        passError.textContent = "Password must include one uppercase letter";
        isValid = false;
    } else if (!/(?=.*\d)/.test(passwordValue)) {
        passError.textContent = "Password must include one number";
        isValid = false;
    } else if (!/(?=.[&#@])/.test(passwordValue)) {
        passError.textContent = "Password must include one special character (&, *, #, @)";
        isValid = false;
    }

    // Confirm password
    let confirmValue = cpass.value.trim();
    if (!confirmValue) {
        cpassError.textContent = "Please confirm the password";
        isValid = false;
    } else if (confirmValue !== passwordValue) {
        cpassError.textContent = "Passwords do not match";
        isValid = false;
    }

    // Email
    let emailValue = mail.value.trim();
    if (!emailValue) {
        mailError.textContent = "Email cannot be empty";
        isValid = false;
    } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(emailValue)) {
        mailError.textContent = "Invalid email format";
        isValid = false;
    }

    // Phone
    let numValue = num.value.trim();
    if (!numValue) {
        numError.textContent = "Phone number cannot be empty";
        isValid = false;
    }

    // DOB
    let dobValue = dob.value.trim();
    if (!dobValue) {
        dateError.textContent = "Date of Birth is required";
        isValid = false;
    }

    // Gender (radio)
    let genderInput = document.querySelector('input[name="gender"]:checked');
    let genderValue = genderInput ? genderInput.value : "";
    if (!genderValue) {
        genError.textContent = "Select a gender";
        isValid = false;
    }

    // Save to localStorage
    if (isValid) {
        let userData = {
            username: usernameValue,
            password: passwordValue,
            email: emailValue,
            phone: numValue,
            dob: dobValue,
            gender: genderValue
        };

        localStorage.setItem("userData", JSON.stringify(userData));

        alert("Form submitted successfully!");
        form.reset();
        window.location.href="../HTML/login.html" 
    }
});