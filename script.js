//your JS code here. If required.
// get elements
const form = document.getElementById("loginForm");
const username = document.getElementById("username");
const password = document.getElementById("password");
const checkbox = document.getElementById("checkbox");
const existingBtn = document.getElementById("existing");

// check localStorage on load
window.onload = function () {
    const savedUser = localStorage.getItem("username");
    const savedPass = localStorage.getItem("password");

    if (savedUser && savedPass) {
        existingBtn.style.display = "block";
    } else {
        existingBtn.style.display = "none";
    }
};

// form submit
form.addEventListener("submit", function (e) {
    e.preventDefault();

    const user = username.value;
    const pass = password.value;

    alert("Logged in as " + user);

    if (checkbox.checked) {
        // save data
        localStorage.setItem("username", user);
        localStorage.setItem("password", pass);
        existingBtn.style.display = "block";
    } else {
        // remove data
        localStorage.removeItem("username");
        localStorage.removeItem("password");
        existingBtn.style.display = "none";
    }
});

// login as existing user
existingBtn.addEventListener("click", function () {
    const savedUser = localStorage.getItem("username");

    if (savedUser) {
        alert("Logged in as " + savedUser);
    }
});