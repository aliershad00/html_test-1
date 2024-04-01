// Function to append a value to the calculator display
function appendToDisplay(value) {
    // Get the display element by its id
    var display = document.getElementById('display');
  
    // Append the value to the display's current value
    display.value += value;
  }
  
  // Function to clear the calculator display
  function clearDisplay() {
    // Get the display element by its id
    var display = document.getElementById('display');
  
    // Clear the display by setting its value to an empty string
    display.value = '';
  }
  
  // Function to calculate and display the result
  function calculate() {
    try {
      // Get the display element by its id
      var display = document.getElementById('display');
      
      // Evaluate the expression entered by the user
      var result = eval(display.value);
      
      // Display the result in the calculator display
      display.value = result;
    } catch (error) {
      // Display an error message if evaluation fails
      alert('Error! Please enter a valid expression.');
    }
  }
  