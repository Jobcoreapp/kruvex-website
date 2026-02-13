// Login Form Handler
document.getElementById('loginForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const remember = document.getElementById('remember').checked;
    
    const errorMessage = document.getElementById('errorMessage');
    const successMessage = document.getElementById('successMessage');
    
    // Clear previous messages
    errorMessage.style.display = 'none';
    successMessage.style.display = 'none';
    
    // Basic validation
    if (!email || !password) {
        errorMessage.textContent = 'Please enter both email and password.';
        errorMessage.style.display = 'block';
        return;
    }
    
    if (!isValidEmail(email)) {
        errorMessage.textContent = 'Please enter a valid email address.';
        errorMessage.style.display = 'block';
        return;
    }
    
    try {
        // Send login request to backend
        const response = await fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: email,
                password: password,
                remember: remember
            })
        });
        
        const data = await response.json();
        
        if (response.ok) {
            // Store token if remember me is checked
            if (remember) {
                localStorage.setItem('token', data.token);
            } else {
                sessionStorage.setItem('token', data.token);
            }
            
            successMessage.textContent = 'Login successful! Redirecting...';
            successMessage.style.display = 'block';
            
            // Redirect to dashboard after 1.5 seconds
            setTimeout(() => {
                window.location.href = data.redirectUrl || '/dashboard';
            }, 1500);
        } else {
            errorMessage.textContent = data.message || 'Login failed. Please check your credentials.';
            errorMessage.style.display = 'block';
        }
    } catch (error) {
        console.error('Login error:', error);
        errorMessage.textContent = 'An error occurred. Please try again later.';
        errorMessage.style.display = 'block';
    }
});

// Email validation function
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Forgot password link handler
document.querySelector('.forgot-password').addEventListener('click', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value.trim();
    
    if (!email) {
        alert('Please enter your email address first.');
        return;
    }
    
    if (!isValidEmail(email)) {
        alert('Please enter a valid email address.');
        return;
    }
    
    // Redirect to password reset page or show dialog
    // This would typically open a modal or redirect to a password reset page
    window.location.href = `/reset-password?email=${encodeURIComponent(email)}`;
});

// Check if user is already logged in
window.addEventListener('load', () => {
    const token = localStorage.getItem('token') || sessionStorage.getItem('token');
    
    if (token) {
        // User is already logged in, redirect to dashboard
        window.location.href = '/dashboard';
    }
});
