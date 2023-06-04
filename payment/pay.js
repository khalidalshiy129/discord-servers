window.addEventListener('DOMContentLoaded', function() {
    // Retrieve the template cost from the URL query parameter
    const urlParams = new URLSearchParams(window.location.search);
    const templateCost = urlParams.get('cost');
  
    // Display the template cost next to the "Pay Now" button
    const costElement = document.querySelector('.cost');
    costElement.textContent = `Cost: $${templateCost}`;
  
    // Add event listener to the payment form submission
    const paymentForm = document.getElementById('payment-form');
    paymentForm.addEventListener('submit', function(event) {
      event.preventDefault();
  
      // Validate and process the payment
      const cardNumber = document.getElementById('card-number').value;
      const expiration = document.getElementById('expiration').value;
      const cvv = document.getElementById('cvv').value;
      const cardholderName = document.getElementById('name').value;
  
      // Implement your payment processing logic here
      // You can use a payment gateway or API to handle the payment transaction
  
      // After successful payment processing, you can redirect the user to a confirmation page
      window.location.href = 'confirmation.html';
    });
  });
  