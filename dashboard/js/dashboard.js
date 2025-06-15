// Fetching the income from the user
let userIncome = prompt("Please enter your current income to continue:");
userIncome = parseFloat(userIncome);
document.getElementById('display_u_income').textContent = userIncome;

// Managing the updating of expenses
console.log(userIncome);
let totalExpenses = 0;
let u_balance = 0;

function kharcha() {
    const userExpense = parseFloat(document.getElementById('expense_entered').value);
    totalExpenses += userExpense; // Add the current expense to the total
    document.getElementById('u_expense').textContent = totalExpenses;
    u_balance = userIncome - totalExpenses;
    document.getElementById('balance').textContent = u_balance;
}

// Theme toggle functionality
const themeToggler = document.getElementById('toggleTheme');
const currentTheme = localStorage.getItem('theme');

// Apply
// Toggle theme and save preference
themeToggler.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
});

// Dark mode functions
function dar_mode_function() {
    document.body.className = 'dark';
    document.getElementsByClassName('top')[0].className = 'top2';
    document.getElementsByClassName('sidebar')[0].className = 'sidebar2';
    document.getElementsByClassName('date')[0].className = "dark-date";
    document.getElementsByClassName('balance-section')[0].className = "dark-balance-section";
    document.getElementsByClassName('income')[0].className = "dark-income";
    document.getElementsByClassName('expense')[0].className = "dark-expense";
    document.getElementsByClassName('profile')[0].className = "dark-profile";
    document.getElementById('toggleTheme').className="dark-button";
    document.getElementById('toggleTheme').innerHTML = '<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAA6klEQVR4nOWVQQ6CQAxFOQR4LiV6FdaKF8AgXsaFJwA9iqJbfaZJNRMCDoWw8icTMk3n/7ZMO0FgAHAAimAqACdZUwoUozIAVkAy4nwiHD4HQTqAPNWzSR/HzNnPgC1wBh66KrVFjl9mDgxYAjXduAGxNVuX/IUfT7OIluVX5E1c3XL1EZD6WrGxCFwGCFRdZHvgKF/HZinPB3Urp7PJRwrcWgTyrqzkzltRDulKC9YWgUibyHJNw94CKhJrE/kgPnMTeUPk6ol8YSVtDrtQmkh+InDXG1aq7VsWYOcddpOPa6Z+cHzgLx/9NytjVF3LgRj2AAAAAElFTkSuQmCC">';
    document.getElementById('toggleTheme').style.margin = '-3px 0 0 0';

    // Ensure button stays in place
    // document.getElementById('toggleTheme').style.border ='10px solid white'; 
    document.getElementById('toggleTheme').style.bgcolor ='white'; 
    document.getElementById('toggleTheme').style.color ='black';
    document.getElementById('toggleTheme').style.padding ='5px';
    document.getElementsByClassName('modal-content')[0].className = "dark-modal-content";
    document.getElementsByClassName('calculator')[0].className = "dark-calculator";
    

}

function light_mode_fun() {
    document.body.className = 'light';
    document.getElementsByClassName('top2')[0].className = 'top';
    document.getElementsByClassName('sidebar2')[0].className = 'sidebar';
    document.getElementsByClassName('dark-balance-section')[0].className = "balance-section";
    document.getElementsByClassName('dark-income')[0].className = "income";
    document.getElementsByClassName('dark-expense')[0].className = "expense";
    document.getElementsByClassName('dark-profile')[0].className = "profile";
    // Ensure button stays in place
    document.getElementById('toggleTheme').style.margin = '0';
    document.getElementsByClassName('dark-date')[0].className = "date";
    document.getElementById('toggleTheme').innerHTML = '<img src="https://img.icons8.com/?size=50&id=45475&format=png" alt="Dark Mode">';
    document.getElementsByClassName('dark-modal-content')[0].className = "modal-content";
    document.getElementsByClassName('dark-calculator')[0].className = "calculator";

}


months=['January','February','March','April','May','June','July','August','September','October','November','December']
var date = new Date();
var day = date.getDate();
var mon = months[date.getMonth()]
document.getElementsByClassName('date')[0].style.padding ="20px";
document.getElementsByClassName('date')[0].innerHTML=mon+" "+day+" , "+date.getFullYear();
document.getElementById('greetings').style.padding = "20px";
var time = date.getHours();
if(time<12){
    document.getElementById('greetings').innerHTML ="Good Morning !!"; 
}
else if(time<17){
    document.getElementById('greetings').innerHTML ="Good Afternoon !!"; 
}
else{
    document.getElementById('greetings').innerHTML ="Good Evening !!"; 
}


document.getElementById('UserName').style.padding  ="20px";
var signupIndex = parseInt(localStorage.getItem('signupIndex')) || 0; // Fetch signupIndex or set it to 0 if null

if (signupIndex > 0) {
    document.getElementById("UserName").innerHTML = "Dear " + localStorage.getItem('name' + (signupIndex - 1)) + " ,";
} else {
    document.getElementById("UserName").innerHTML = "Dear Guest ,"; // Default message when no users are stored
}


// Calculator functions
let calcDisplay = document.getElementById('calcDisplay');
let currentInput = '';
let operator = '';
let previousInput = '';

function appendNumber(number) {
    currentInput += number;
    calcDisplay.value = currentInput;
}

function setOperation(op) {
    if (currentInput === '') return;
    previousInput = currentInput;
    operator = op;
    currentInput = '';
}

function calculateResult() {
    if (currentInput === '' || previousInput === '') return;
    const current = parseFloat(currentInput);
    const previous = parseFloat(previousInput);
    let result;
    switch (operator) {
        case '+':
            result = previous + current;
            break;
        case '-':
            result = previous - current;
            break;
        case '*':
            result = previous * current;
            break;
        case '/':
            result = previous / current;
            break;
        default:
            return;
    }
    calcDisplay.value = result;
    currentInput = '';
    previousInput = '';
    operator = '';
}

function clearDisplay() {
    currentInput = '';
    previousInput = '';
    operator = '';
    calcDisplay.value = '';
}

// Open the modal
 function openCalc() {
    document.getElementById('calculatorModal').style.display = 'block';
}

// Close the modal
document.querySelector('.close').onclick = function() {
    document.getElementById('calculatorModal').style.display = 'none';
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == document.getElementById('calculatorModal')) {
        document.getElementById('calculatorModal').style.display = 'none';
    }
}

document.getElementById("balance").value.addEventListener('click', () => {  
    alert("You cannot expend more than your income");
    return false;
});