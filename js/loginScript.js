// Session Management
const sessionManager = {
    currentUser: null,

    init: function () {
        // Check if user is already logged in (from localStorage)
        const savedUser = localStorage.getItem('Dhanadhyaksh_user');
        if (savedUser) {
            this.currentUser = JSON.parse(savedUser);
            this.showDashboard();
        } else {
            this.showAuth();
        }
    },

    login: function (user) {
        this.currentUser = user;
        localStorage.setItem('Dhanadhyaksh_user', JSON.stringify(user));
        this.showRedirect('Login Successful', 'Welcome back! Redirecting to your dashboard...');

        setTimeout(() => {
            this.showDashboard();
        }, 2000);
    },

    signup: function (user) {
        this.currentUser = user;
        localStorage.setItem('Dhanadhyaksh_user', JSON.stringify(user));
        this.showRedirect('Account Created', 'Welcome to Dhanadhyaksh! Redirecting to your dashboard...');

        setTimeout(() => {
            this.showDashboard();
        }, 2000);
    },

    logout: function () {
        this.currentUser = null;
        localStorage.removeItem('Dhanadhyaksh_user');
        this.showRedirect('Logout Successful', 'You have been logged out. Redirecting to login page...');

        setTimeout(() => {
            this.showAuth();
        }, 2000);
    },

    showAuth: function () {
        document.getElementById('auth-page').style.display = 'flex';
        document.getElementById('dashboard-page').style.display = 'none';
        document.getElementById('redirect-overlay').style.display = 'none';

        // Reset forms
        loginForm.reset();
        signupForm.reset();
        strengthBar.style.width = '0';

        // Pre-fill demo credentials
        document.getElementById('login-email').value = 'demo@example.com';
        document.getElementById('login-password').value = 'Demo@123';
    },

    showDashboard: function () {
        document.getElementById('auth-page').style.display = 'none';
        document.getElementById('dashboard-page').style.display = 'flex';
        document.getElementById('redirect-overlay').style.display = 'none';

        // Update dashboard with user info
        if (this.currentUser) {
            document.getElementById('dashboard-username').textContent = this.currentUser.name;
            document.getElementById('dashboard-email').textContent = this.currentUser.email;
            document.getElementById('welcome-name').textContent = this.currentUser.name.split(' ')[0];
        }
    },

    showRedirect: function (title, message) {
        document.getElementById('redirect-title').textContent = title;
        document.getElementById('redirect-message').textContent = message;
        document.getElementById('redirect-overlay').style.display = 'flex';
    }
};

// DOM Elements
const loginFormEl = document.getElementById('login-form');
const signupFormEl = document.getElementById('signup-form');
const loginForm = document.getElementById('loginForm');
const signupForm = document.getElementById('signupForm');
const showSignupBtn = document.getElementById('show-signup');
const showLoginBtn = document.getElementById('show-login');
const toast = document.getElementById('toast');
const logoutBtn = document.getElementById('logout-btn');
const backToAuthBtn = document.getElementById('back-to-auth');

// Toggle password visibility
document.querySelectorAll('.toggle-password').forEach(button => {
    button.addEventListener('click', function () {
        const input = this.parentElement.querySelector('input');
        const icon = this.querySelector('i');

        if (input.type === 'password') {
            input.type = 'text';
            icon.classList.remove('fa-eye');
            icon.classList.add('fa-eye-slash');
        } else {
            input.type = 'password';
            icon.classList.remove('fa-eye-slash');
            icon.classList.add('fa-eye');
        }
    });
});

// Form switching
showSignupBtn.addEventListener('click', () => {
    loginFormEl.style.display = 'none';
    signupFormEl.style.display = 'block';

    // Add animation effect
    signupFormEl.style.opacity = '0';
    signupFormEl.style.transform = 'translateX(20px)';

    setTimeout(() => {
        signupFormEl.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
        signupFormEl.style.opacity = '1';
        signupFormEl.style.transform = 'translateX(0)';
    }, 10);
});

showLoginBtn.addEventListener('click', () => {
    signupFormEl.style.display = 'none';
    loginFormEl.style.display = 'block';

    // Add animation effect
    loginFormEl.style.opacity = '0';
    loginFormEl.style.transform = 'translateX(-20px)';

    setTimeout(() => {
        loginFormEl.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
        loginFormEl.style.opacity = '1';
        loginFormEl.style.transform = 'translateX(0)';
    }, 10);
});

// Password strength indicator
const passwordInput = document.getElementById('signup-password');
const strengthBar = document.getElementById('password-strength-bar');

passwordInput.addEventListener('input', function () {
    const password = this.value;
    let strength = 0;

    // Check password strength
    if (password.length >= 8) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[^A-Za-z0-9]/.test(password)) strength++;

    // Update strength bar
    strengthBar.className = 'strength-bar';
    if (password.length === 0) {
        strengthBar.style.width = '0';
    } else if (strength <= 1) {
        strengthBar.classList.add('strength-weak');
    } else if (strength <= 3) {
        strengthBar.classList.add('strength-medium');
    } else {
        strengthBar.classList.add('strength-strong');
    }
});

// Show toast message
function showToast(message, type = 'info') {
    toast.textContent = message;
    toast.className = `toast ${type} show`;

    setTimeout(() => {
        toast.classList.remove('show');
    }, 4000);
}

// Validation functions
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validatePassword(password) {
    // At least 8 characters, one uppercase, one lowercase, one number
    const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    return re.test(password);
}

function validateName(name) {
    return name.length >= 2;
}

// Simulated database for demo purposes
const users = [
    { email: 'demo@example.com', password: 'Demo@123', name: 'Demo User' }
];

// Login form submission
loginForm.addEventListener('submit', async function (e) {
    e.preventDefault();

    const email = document.getElementById('login-email').value.trim();
    const password = document.getElementById('login-password').value;
    const emailError = document.getElementById('login-email-error');
    const passwordError = document.getElementById('login-password-error');
    const loginBtn = document.getElementById('login-btn');
    const loginLoading = document.getElementById('login-loading');

    // Reset errors
    emailError.style.display = 'none';
    passwordError.style.display = 'none';

    // Client-side validation
    let isValid = true;

    if (!validateEmail(email)) {
        emailError.textContent = 'Please enter a valid email address';
        emailError.style.display = 'block';
        isValid = false;
    }

    if (password.length < 6) {
        passwordError.textContent = 'Password must be at least 6 characters';
        passwordError.style.display = 'block';
        isValid = false;
    }

    if (!isValid) return;

    // Show loading
    loginBtn.disabled = true;
    loginLoading.style.display = 'block';

    // Simulate API call with delay
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Check credentials (simulated backend validation)
    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
        // Successful login - redirect to dashboard
        sessionManager.login(user);
    } else {
        showToast('Invalid email or password', 'error');
        passwordError.textContent = 'Invalid email or password';
        passwordError.style.display = 'block';
    }

    // Hide loading
    loginBtn.disabled = false;
    loginLoading.style.display = 'none';
});

// Signup form submission
signupForm.addEventListener('submit', async function (e) {
    e.preventDefault();

    const name = document.getElementById('signup-name').value.trim();
    const email = document.getElementById('signup-email').value.trim();
    const password = document.getElementById('signup-password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    const nameError = document.getElementById('signup-name-error');
    const emailError = document.getElementById('signup-email-error');
    const passwordError = document.getElementById('signup-password-error');
    const confirmError = document.getElementById('confirm-password-error');

    const signupBtn = document.getElementById('signup-btn');
    const signupLoading = document.getElementById('signup-loading');

    // Reset errors
    nameError.style.display = 'none';
    emailError.style.display = 'none';
    passwordError.style.display = 'none';
    confirmError.style.display = 'none';

    // Client-side validation
    let isValid = true;

    if (!validateName(name)) {
        nameError.textContent = 'Name must be at least 2 characters';
        nameError.style.display = 'block';
        isValid = false;
    }

    if (!validateEmail(email)) {
        emailError.textContent = 'Please enter a valid email address';
        emailError.style.display = 'block';
        isValid = false;
    }

    if (!validatePassword(password)) {
        passwordError.textContent = 'Password must be at least 8 characters with uppercase, lowercase, and a number';
        passwordError.style.display = 'block';
        isValid = false;
    }

    if (password !== confirmPassword) {
        confirmError.textContent = 'Passwords do not match';
        confirmError.style.display = 'block';
        isValid = false;
    }

    if (!isValid) return;

    // Show loading
    signupBtn.disabled = true;
    signupLoading.style.display = 'block';

    // Simulate API call with delay
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Check if user already exists (simulated backend validation)
    const existingUser = users.find(u => u.email === email);

    if (existingUser) {
        showToast('User with this email already exists', 'error');
        emailError.textContent = 'User with this email already exists';
        emailError.style.display = 'block';
    } else {
        // Add new user (in a real app, this would be a database operation)
        const newUser = { email, password, name };
        users.push(newUser);

        // Successful signup - redirect to dashboard
        sessionManager.signup(newUser);

        // Reset form
        signupForm.reset();
        strengthBar.style.width = '0';
    }

    // Hide loading
    signupBtn.disabled = false;
    signupLoading.style.display = 'none';
});

// Forgot password functionality
document.getElementById('forgot-password').addEventListener('click', function (e) {
    e.preventDefault();
    const email = prompt('Please enter your email address to reset your password:');

    if (email && validateEmail(email)) {
        // Simulate password reset request
        showToast('Password reset instructions sent to your email', 'info');
    } else if (email) {
        showToast('Please enter a valid email address', 'error');
    }
});

// Logout functionality
logoutBtn.addEventListener('click', function () {
    sessionManager.logout();
});

// Back to auth page from dashboard
backToAuthBtn.addEventListener('click', function () {
    sessionManager.logout();
});

// Initialize the application
document.addEventListener('DOMContentLoaded', function () {
    sessionManager.init();

    // Pre-fill demo credentials for testing
    document.getElementById('login-email').value = 'demo@example.com';
    document.getElementById('login-password').value = 'Demo@123';

    // Show welcome message on first load if not logged in
    if (!localStorage.getItem('Dhanadhyaksh_user')) {
        setTimeout(() => {
            showToast('Welcome to Dhanadhyaksh! Use demo@example.com / Demo@123 to test login', 'info');
        }, 1000);
    }
});