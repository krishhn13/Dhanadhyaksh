const loginText = document.querySelector(".title-text .login");
const loginForm = document.querySelector("form.login");
const loginBtn = document.querySelector("label.login");
const signupBtn = document.querySelector("label.signup");
const signupLink = document.querySelector("form .signup-link a");


const signupID = document.getElementById("signup-email");
const signupPass = document.getElementById("signup-pass");
const signupPass2 = document.getElementById("signup-conf-pass");
const security = document.getElementById("security");
const signupName = document.getElementById("signup-name");

signupBtn.onclick = () => {
    loginForm.style.marginLeft = "-50%";
    loginText.style.marginLeft = "-50%";
};

loginBtn.onclick = () => {
    loginForm.style.marginLeft = "0%";
    loginText.style.marginLeft = "0%";
};

signupLink.onclick = () => {
    signupBtn.click();
    return false;
};

let i = localStorage.getItem('signupIndex') ? parseInt(localStorage.getItem('signupIndex')) : 0;
function validate(event) {
    event.preventDefault();
    if (signupPass.value !== signupPass2.value) {
        alert("Passwords do not match");
        return false;
    } else {
        localStorage.setItem("email" + i, signupID.value);
        localStorage.setItem("password" + i, signupPass.value);
        localStorage.setItem("security"+i,security.value);
        localStorage.setItem("name"+i,signupName.value);
        i++;
        localStorage.setItem('signupIndex', i);
        alert("Signup successful!");
        return true;
    }
}


//Login Function || Checking if the user exists or not 
function login() {
    var j = 0;
    var loginID = document.getElementById("login-email").value;
    var loginPass = document.getElementById("login-password").value;

    var signupIndex = parseInt(localStorage.getItem('signupIndex')) || 0;

    while (j < signupIndex) {
        var storedEmail = localStorage.getItem("email" + j);
        var storedPassword = localStorage.getItem("password" + j);

        if (loginID === storedEmail && loginPass === storedPassword) {
            window.location.href = "../dashboard.html";
            return; // Exit the function once login is successful
        }
        j++;
    }

    alert("Either Password Or Email ID is Wrong!");
}
