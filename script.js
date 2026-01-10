// Get the display element
const display = document.getElementById('display');

// Append value to display
function appendToDisplay(value) {
    // If display shows 0, replace it with the new value
    if (display.value === '0' && value !== '.') {
        display.value = value;
    } else {
        display.value += value;
    }
}

// Clear the display
function clearDisplay() {
    display.value = '0';
}

// Calculate the result
function calculate() {
    try {
        // Get the expression from the display
        const expression = display.value;
        
        // Evaluate the expression
        const result = eval(expression);
        
        // Update display with result
        display.value = result;
    } catch (error) {
        // If there's an error in the expression, show error message
        display.value = 'Error';
        
        // Reset after 2 seconds
        setTimeout(() => {
            display.value = '0';
        }, 2000);
    }
}

// Allow Enter key to calculate
document.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        calculate();
    }
});

// Allow keyboard input for numbers and operators
document.addEventListener('keydown', function(event) {
    const key = event.key;
    
    if (/[0-9+\-*/.()]/g.test(key)) {
        appendToDisplay(key);
    } else if (key === 'Backspace') {
        // Remove last character
        if (display.value.length > 1) {
            display.value = display.value.slice(0, -1);
        } else {
            display.value = '0';
        }
    } else if (key === 'Escape') {
        // Clear on Escape
        clearDisplay();
    }
});
