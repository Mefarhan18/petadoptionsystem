function validateForm() {
    let valid = true;

    // Clear previous error messages
    document.getElementById("nameError").innerHTML = "";
    document.getElementById("emailError").innerHTML = "";
    document.getElementById("phoneError").innerHTML = "";
    document.getElementById("messageError").innerHTML = "";

    // Get form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const message = document.getElementById("message").value;

    // Validate Name
    if (name === "") {
        document.getElementById("nameError").innerHTML = "Name is required";
        valid = false;
    }

    // Validate Email
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (email === "" || !emailPattern.test(email)) {
        document.getElementById("emailError").innerHTML = "Please enter a valid email";
        valid = false;
    }

    // Validate Phone (just a simple number validation)
    const phonePattern = /^\d{10}$/;
    if (phone === "" || !phonePattern.test(phone)) {
        document.getElementById("phoneError").innerHTML = "Please enter a valid phone number (10 digits)";
        valid = false;
    }

    // Validate Message
    if (message === "") {
        document.getElementById("messageError").innerHTML = "Message is required";
        valid = false;
    }

    return valid;
}
