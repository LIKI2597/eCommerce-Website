// Get data from localStorage
const data = JSON.parse(localStorage.getItem("userData"));

if (!data) {
    alert("No user is currently logged in.");
    window.location.href = "../HTML/login.html";
} else {
    document.getElementById('acc-username').textContent = data.username;
    document.getElementById('acc-email').textContent = data.email;
    document.getElementById('acc-phone').textContent = data.phone;
    document.getElementById('acc-dob').textContent = data.dob;
    document.getElementById('acc-gender').textContent = data.gender;
}

// Button events
document.getElementById('edit-btn').addEventListener('click', () => {
    window.location.href = "../HTML/signup.html";
});

document.getElementById('home-btn').addEventListener('click', () => {
    window.location.href = "../HTML/home1.html";
});

document.getElementById('logout-btn').addEventListener('click', () => {
    localStorage.removeItem("userData");
    alert("You have been logged out.");
    window.location.href = "../HTML/login.html";
});
