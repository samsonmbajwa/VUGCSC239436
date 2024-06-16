function
calculateCompoundInterest(principal, rate, time, n) {
    return principal * Math.pow((1 + rate / (n * 100)), n * time);
}

const principal = 
parseFloat(prompt("Enter the principal amount:"));
const rate = parseFloat(prompt("Enter the annual rate of  interest(in %):"));
const time = parseFloat(prompt("Enter the time period in years:"));
const n = parseFloat(prompt("Enter the number of times interest is compounded per year:"));

if (isNaN(principal) || isNaN(rate) || isNaN(time) || isNaN(n)) {
    alert("Please enter valid numerical values for all inputs.");
} else{
    const amount = calculateCompoundInterest(principal, rate, time, n);
    const interest = amount - principal

alert(`The compound interest is ${interest.toFixed(2)}`);
alert(`The total amount after ${time} years is:${amount.toFixed(2)}`);
}