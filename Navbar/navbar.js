// Patterns
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordPattern = /^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[@$!%?&])[A-Za-z\d@$!%?&]{8,}$/;
 // At least 1 letter, 1 number, 1 special character, minimum 8 characters
const usernamePattern = /^[a-zA-Z0-9_]{3,20}$/; // Alphanumeric and underscores, 3-20 characters

// Sign Up Function
function signup() {
  Swal.fire({
    title: 'Sign Up',
    html: `
      <input type="text" id="username" class="swal2-input" placeholder="Username">
      <input type="text" id="email" class="swal2-input" placeholder="Email">
      <input type="password" id="password" class="swal2-input" placeholder="Password">
    `,
    confirmButtonText: 'Sign Up',
    focusConfirm: false,
    preConfirm: () => {
      const username = document.getElementById('username').value;
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;

      if (!usernamePattern.test(username)) {
        Swal.showValidationMessage('Username must be 3-20 characters, alphanumeric or underscores only');
      } else if (!emailPattern.test(email)) {
        Swal.showValidationMessage('Invalid email format');
      } else if (!passwordPattern.test(password)) {
        Swal.showValidationMessage('Password must be at least 8 characters, include letters, numbers, and special characters');
      } else {
        return { username, email, password };
      }
    },
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire('Success', 'Sign Up Complete!', 'success');
    }
  });
}

// Log In Function with Confirm Password
function login() {
  Swal.fire({
    title: 'Log In',
    html: `
      <input type="text" id="username" class="swal2-input" placeholder="Username">
      <input type="password" id="password" class="swal2-input" placeholder="Password">
      <input type="password" id="confirmPassword" class="swal2-input" placeholder="Confirm Password">
    `,
    confirmButtonText: 'Log In',
    focusConfirm: false,
    preConfirm: () => {
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;
      const confirmPassword = document.getElementById('confirmPassword').value;

      if (!username) {
        Swal.showValidationMessage('Username cannot be empty');
      } else if (!passwordPattern.test(password)) {
        Swal.showValidationMessage('Password must be at least 8 characters, include letters, numbers, and special characters');
      } else if (password !== confirmPassword) {
        Swal.showValidationMessage('Passwords do not match');
      } else {
        return { username, password };
      }
    },
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire('Welcome Back', 'Login Successful!', 'success');
    }
  });
}