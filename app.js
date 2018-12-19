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



    // prevent default behavior
    e.preventDefault();

}