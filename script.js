// Get references to the HTML elements we need to interact with
const counterElement = document.getElementById('counter');
const incrementButton = document.getElementById('incrementBtn');
const decrementButton = document.getElementById('decrementBtn');

// Initialize the counter variable
let count = 0;

// Function to update the counter display
function updateCounter() {
    counterElement.textContent = count;
}

// Event listener for the increment button
incrementButton.addEventListener('click', function() {
    count++;
    updateCounter();
});

// Event listener for the decrement button
decrementButton.addEventListener('click', function() {
    count--;
    updateCounter();
});

// Initial update of the counter display
updateCounter();
