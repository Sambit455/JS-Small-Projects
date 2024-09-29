document.getElementById("registrationForm").addEventListener("submit", function(event) {
  event.preventDefault();  // Prevent form submission
  
  let isValid = true;

  // Username validation
  const username = document.getElementById("username").value.trim();
  const usernameError = document.getElementById("usernameError");
  if (username.length < 3) {
    usernameError.textContent = "Username must be at least 3 characters.";
    isValid = false;
  } else {
    usernameError.textContent = "";
  }

  // Email validation
  const email = document.getElementById("email").value.trim();
  const emailError = document.getElementById("emailError");
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (!emailPattern.test(email)) {
    emailError.textContent = "Please enter a valid email address.";
    isValid = false;
  } else {
    emailError.textContent = "";
  }

  // Password validation
  const password = document.getElementById("password").value;
  const passwordError = document.getElementById("passwordError");
  const passwordStrength = document.getElementById("passwordStrength");
  let strength = 0;
  
  if (password.length >= 6) strength++;
  if (/[A-Z]/.test(password)) strength++;
  if (/[0-9]/.test(password)) strength++;
  if (/[@$!%*?&#]/.test(password)) strength++;

  switch (strength) {
    case 1:
      passwordStrength.style.backgroundColor = "red";
      break;
    case 2:
      passwordStrength.style.backgroundColor = "orange";
      break;
    case 3:
      passwordStrength.style.backgroundColor = "yellow";
      break;
    case 4:
      passwordStrength.style.backgroundColor = "green";
      break;
    default:
      passwordStrength.style.backgroundColor = "#ddd";
  }

  if (strength < 2) {
    passwordError.textContent = "Password is too weak.";
    isValid = false;
  } else {
    passwordError.textContent = "";
  }

  // Confirm password validation
  const confirmPassword = document.getElementById("confirmPassword").value;
  const confirmPasswordError = document.getElementById("confirmPasswordError");
  if (confirmPassword !== password) {
    confirmPasswordError.textContent = "Passwords do not match.";
    isValid = false;
  } else {
    confirmPasswordError.textContent = "";
  }

  // Phone number validation (optional)
  const phone = document.getElementById("phone").value.trim();
  const phoneError = document.getElementById("phoneError");
  const phonePattern = /^[0-9]{10}$/;
  if (phone && !phonePattern.test(phone)) {
    phoneError.textContent = "Please enter a valid 10-digit phone number.";
    isValid = false;
  } else {
    phoneError.textContent = "";
  }

  // Submit the form if valid
  if (isValid) {
    alert("Registration Successful!");
    // Form submission logic (AJAX or standard form submission) goes here
  }
});
