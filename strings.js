function validateName(firstName, lastName) {
  const nameRegex = /^[a-zA-Z]+$/; // Regular expression for letters only

  if (firstName.trim() === '' || lastName.trim() === '') {
    return false; // Empty first or last name
  }

  if (!nameRegex.test(firstName) || !nameRegex.test(lastName)) {
    return false; // Invalid characters in first or last name
  }

  if (firstName.length + lastName.length <= 20) {
    return false; // Name length less than or equal to 20 characters
  }
  const fullName = firstName + lastName;
  if (fullName.length > 20) {
    alert('Name length exceeds 20 characters. Please enter a shorter name.');
    return false; // Name length exceeds 20 characters
  }

  return true; // Valid input
}

function validateAndSubmit() {
  const firstNameInput = document.getElementById('firstName').value;
  const lastNameInput = document.getElementById('lastName').value;

  const isValidName = validateName(firstNameInput, lastNameInput);

  if (!isValidName) {
    const errorContainer = document.getElementById('errorContainer');
    errorContainer.textContent = 'Invalid first or last name. Please enter letters only and ensure both fields are not empty.';
    return; // Stop form submission if validation fails
  }

  alert('Valid name. Proceeding with form submission.');
  // Proceed with form submission or further processing
  console.log('Form submitted successfully!');
}
function validateZipCode(zipCode) {
  const zipCodeRegex = /^\d{5}$/; // Regular expression for 5 digits

  if (!zipCodeRegex.test(zipCode)) {
    return false; // Invalid zip code format
  }

  return true; // Valid input
}



  
