// const apiKey = '2f4daaec72e9449383dc21f0f39d69f8';
// const blogContainer = document.getElementById('blog-container');

// // Fetch random news
// async function fetchRandomNews() {
//     try {
//         const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&pageSize=1&apikey=${apiKey}`;
//         const response = await fetch(apiUrl);
//         const data = await response.json();
//         console.log(data);
//         return data.articles;
//     } catch (error) {
//         console.log('Error fetching random news', error);
//         return [];
//     }
// }

// // Display blogs
// function displayBlogs(articles) {
//     blogContainer.innerHTML = "";
//     articles.forEach((article) => {
//         const blogCard = document.createElement("div");
//         blogCard.classList.add("blog-card");
        
//         const img = document.createElement("img");
//         img.src = article.urlToImage;
//         img.alt = article.title;
        
//         const title = document.createElement("h2");
//         title.textContent = article.title;
        
//         const description = document.createElement("p");
//         description.textContent = article.description;
        
//         blogCard.appendChild(img);
//         blogCard.appendChild(title);
//         blogCard.appendChild(description);
//         blogContainer.appendChild(blogCard);
//     });
// }

// // Immediately-invoked function expression (IIFE) to fetch and display news
// (async () => {
//     try {
//         const articles = await fetchRandomNews();
//         displayBlogs(articles);
//     } catch (error) {
//         console.log('Error fetching random news', error);
//     }
// })();

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

// Dark mode functions
function dar_mode_function() {
    document.body.className = 'dark';
    document.getElementsByClassName('top')[0].className = 'top2';
    document.getElementsByClassName('sidebar')[0].className = 'sidebar2';
    // Ensure button stays in place
    document.getElementById('toggleTheme').style.margin = '0';
}

function light_mode_fun() {
    document.body.className = 'light';
    document.getElementsByClassName('top2')[0].className = 'top';
    document.getElementsByClassName('sidebar2')[0].className = 'sidebar';
    // Ensure button stays in place
    document.getElementById('toggleTheme').style.margin = '0';
}
