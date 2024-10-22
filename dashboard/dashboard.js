// fetching the income from the user 
// let user_income= prompt("Please enter your current income to continue :");
document.getElementById('display_u_income').textContent=user_income;
// managing the updation of expenses 

console.log(user_income);
const user_expense=document.getElementById('expense_entered').value; 
let totalExpenses = 0;
let u_balance =  0 ;
function kharcha() {
    const user_expense = document.getElementById('expense_entered').value;
    totalExpenses += parseFloat(user_expense); // Add the current expense to the total
    document.getElementById('u_expense').textContent = totalExpenses;

    u_balance = user_income - totalExpenses ;
    document.getElementById('balance').textContent= u_balance ; 
}
const themeToggler = document.getElementById('theme-toggler');
const currentTheme = localStorage.getItem('theme');

// Apply the saved theme on page load
if (currentTheme === 'dark') {
    document.body.classList.add('dark-mode');
}

// Toggle theme and save preference
themeToggler.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
});
