// Form validation function
function validateForm(event) {
    event.preventDefault();  // Prevent form submission until validation is complete

    // Get the form elements
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirm-password');
    const phone = document.getElementById('phone');
    const terms = document.getElementById('terms');
    
    // Clear previous error messages
    clearErrors();

    // Check if all fields are filled
    let isValid = true;

    if (!name.value.trim()) {
        displayError(name, "Name is required");
        isValid = false;
    }

    if (!email.value.trim()) {
        displayError(email, "Email is required");
        isValid = false;
    } else if (!isValidEmail(email.value)) {
        displayError(email, "Enter a valid email address");
        isValid = false;
    }

    if (!password.value.trim()) {
        displayError(password, "Password is required");
        isValid = false;
    } else if (password.value.length < 6) {
        displayError(password, "Password must be at least 6 characters long");
        isValid = false;
    }

    if (!confirmPassword.value.trim()) {
        displayError(confirmPassword, "Confirm password is required");
        isValid = false;
    } else if (confirmPassword.value !== password.value) {
        displayError(confirmPassword, "Passwords do not match");
        isValid = false;
    }

    if (!phone.value.trim()) {
        displayError(phone, "Phone number is required");
        isValid = false;
    } else if (!isValidPhone(phone.value)) {
        displayError(phone, "Enter a valid phone number");
        isValid = false;
    }

    if (!terms.checked) {
        displayError(terms, "You must agree to the terms and conditions");
        isValid = false;
    }

    // If form is valid, allow submission
    if (isValid) {
        document.getElementById('signup-form').submit();  // Submit the form
    }
}

// Helper function to display error messages
function displayError(element, message) {
    const errorElement = document.createElement('span');
    errorElement.classList.add('error-message');
    errorElement.textContent = message;
    element.parentElement.appendChild(errorElement);
}

// Helper function to clear previous error messages
function clearErrors() {
    const errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(msg => msg.remove());
}

// Helper function to check if email is valid
function isValidEmail(email) {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email);
}

// Helper function to check if phone number is valid
function isValidPhone(phone) {
    const regex = /^[0-9]{10}$/;  // Adjust for specific phone number format
    return regex.test(phone);
}

// Event listener for form submission
document.getElementById('signup-form').addEventListener('submit', validateForm);
