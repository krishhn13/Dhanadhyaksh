// fetching the income from the user 
let user_income= prompt("Please enter your current income to continue :");
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

// calling an api for the news side pannel..

