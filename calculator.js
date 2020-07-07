window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      // console.log("user input for loan amount", document.getElementById("loan-amount").value)
      // console.log(calculateMonthlyPayment({amount:10000, years:10, rate:.5}));
      console.log("test");
      e.preventDefault();
      update();
    });
  }
});
// handles form submission
function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}
// Get the inputs from the DOM.
// Put some default values in the inputs: prepopulating
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  document.getElementById("loan-amount").value = 10000
  document.getElementById("loan-years").value = 2
  document.getElementById("loan-rate").value = .4
  // console.log("Running setupIntialValues()");

  // // overwrite default values
  // // console.log("getCurrentUI", getCurrentUIValues())
  // // console.log(sessionS);
  //   // Debugging to check value
  //   console.log("default", defaultUIValues, getCurrentUIValues());
  //   // console.log(sessionStorage.getItem("currentUIValues", JSON.));
}
// Get the current values from the UI
// Update the monthly payment

function update() {
  // update element of HTML
  console.log("test");
  document.getElementById("monthly-payment").innerHTML = calculateMonthlyPayment(getCurrentUIValues());
}
// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  let i = (values.rate/100)/12;
  let n = values.years*12;
  let newI = i+1;
  let monthlyPayment = (values.amount * i) / (1 - ((i+1)**(-n)));
  console.log(i, n, ((i+1)**(-n)), monthlyPayment)
  //console.log(i, n, (values.amount * i), (1 - Math.pow((i+1),(-n))));
  return monthlyPayment;
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
}