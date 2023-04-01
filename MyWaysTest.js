function fizzBuzz(phoneNumber) {
    let sum = 0;
    let output ="";
    
    // Compute the sum of the digits in the phone number
    for (let digit of phoneNumber.to.String()) {
        sum += parseint(digit);
    }
    
    for (let i=1;i<=20;i++) {
        if (i%3 == 0 && i%4 === 0) {
            output += 'FizzBuzz';
        } else if (i%3 === 0) {
            output += 'Fizz';
        } else if (i%4 === 0) {
            output += 'Buzz';
        } else {
            output +=i+'';
        }    
    }
    return output;
}

//Example usage:
console.log(fizzBuzz(8291703849));
