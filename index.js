var customerName = "John Doe";
function uppercaseCustomerName() {
    if (typeof customerName === 'string') {
      customerName = customerName.toUpperCase();
    }
  }
  uppercaseCustomerName();
  function setBestCustomer() {
    bestCustomer = 'not bob';
  }
  
  // Call the function to set the global variable
  setBestCustomer();
  