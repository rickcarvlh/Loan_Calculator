// Listen for submit
document.getElementById('loan-form').addEventListener('submit', calculateResults);

// Calculate Results - event parameter
function calculateResults(e) {
    console.log('Calculating.....');

    // UI variables
    const amount = document.getElementById('amount');
    const interest = document.getElementById('interest');
    const years = document.getElementById('years');
    const monthlyPayment = document.getElementById('monthly-payment');
    const totalPayment = document.getElementById('total-payment');
    const totalInterest = document.getElementById('total-interest');

    // value -> gets value in 
    const principal = parseFloat(amount.value);
    const calculateInterest = parseFloat(interest.value) / 100 / 12;
    const calculatePayments = parseFloat(years.value) * 12;

    // Compute monthly payment
    const x = Math.pow(1 + calculateInterest, calculatePayments);
    const monthly = (principal * x * calculateInterest) / (x - 1);

    // is finite
    if (isFinite(monthly)) {
        monthlyPayment.value = monthly.toFixed(2);
        totalPayment.value = (monthly * calculatePayments).toFixed(2);
        totalInterest.value = ((monthly * calculatePayments) - principal).toFixed(2);
    } else {
        // console.log('Please check your numbers');
        showError('Please check your numberes');

    }
    // prevent default behavior
    e.preventDefault();

}


// Show Error
function showError(error) {
    // Create a div
    const errorDiv = document.createElement('div');

    // Get elements
    // Before heading
    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading');

    // Add class
    errorDiv.className = 'alert alert-danger';

    // Create text node and append to div
    errorDiv.appendChild(document.createTextNode(error));

    // Insert error above heading 
    card.insertBefore(errorDiv, heading);

    // Clear error after 3 seconds
    // 3sec
    setTimeout(clearError, 3000);
}

function clearError() {
    document.querySelector('.alert').remove();
}