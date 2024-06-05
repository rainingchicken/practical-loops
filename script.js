// Part 1: Fizz Buzz
// To begin, solve the following classic “Fizz Buzz” problem. There are a few different ways to do this - experiment with what you think is the most efficient. Once you have solved the problem, ask yourself if there could be another way; and if so, would it be better.
// Accomplish the following:
// Loop through all numbers from 1 to 100.
// If a number is divisible by 3, log “Fizz.”
// If a number is divisible by 5, log “Buzz.”
// If a number is divisible by both 3 and 5, log “Fizz Buzz.”
// If a number is not divisible by either 3 or 5, log the number.
// Remember to commit your solution once it is working.

function fizzBuzz() {
  for (let num = 1; num <= 100; num++) {
    if (num % 3 == 0 && num % 5 == 0) {
      console.log("Fizz Buzz");
    } else if (num % 5 == 0) {
      console.log("Buzz");
    } else if (num % 3 == 0) {
      console.log("Frizz");
    } else {
      console.log(num);
    }
  }
}

//fizzBuzz();

// Part 2: Prime Time
// Now we will move onto something slightly more complex.
// Context: A prime number is any whole number greater than 1 that cannot be exactly divided by any whole number other than itself and 1. For example, the number 5 is prime because it cannot be divided by 4, 3, or 2; it can only be divided by itself (5) and 1. Similarly, the numbers 7 and 11 are prime. As numbers become larger, determining whether or not they are prime is increasingly difficult, but loops make this process relatively easy!
// Write a script that accomplishes the following:
// Declare an arbitrary number, n.
// Create a loop that searches for the next prime number, starting at n and incrementing from there.
// As soon as you find the prime number, log that number and exit the loop.
// Continuing with the example above, if n is equal to 4, your loop should log 5. Similarly, if n is 5, it should log 7, and if n is 9, it should log 11. Test your loop with higher numbers and reference an online prime number table to determine the accuracy of your code.
// Be careful! If you set n to a number too large, your loop could take a long time to process.
let result;
function findNextPrime(n) {
  //if n is less than 3 then guaranteed prime
  if (n <= 3) {
    result = n;
  } else {
    //start index = 3
    for (let index = 3; index < n; index++) {
      //if n is divisble by something
      if (n % index == 0) {
        //increment n and go again
        //havnt used recursion in so long yet ultra instinct
        findNextPrime(++n);
      } else {
        //when n is not divisble by any num lesser than itself, return n cuz its prime
        result = n;
      }
    }
  }
  return result;
}
//check function
// for (let index = 0; index < 100; index++) {
//   console.log(findNextPrime(index));
// }
//looks correct

// Part 3: Feeling Loopy
// Context: A CSV file, or “Comma-Separated Values” file is traditionally used to store tabular data. You may be familiar with CSVs through past use of programs such as Microsoft Excel or Google Sheets. While each of these programs save their data in different formats to preserve style (e.g., font color or cell backgrounds), at their core, they are storing CSV data.

let CSVdata =
  "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";
let CSVarray = [];
let element = [];
let groupedElements = [];
let temp = "";
//separate by ',' into array
for (let index = 0; index < CSVdata.length; index++) {
  temp += CSVdata[index];
  if (
    CSVdata[index] == "," ||
    CSVdata[index] == "\r" ||
    CSVdata[index] == "\n"
  ) {
    element.push(temp);
    temp = "";
  }
  if (CSVdata[index] == "\r" || CSVdata[index] == "\n") {
    CSVarray.push(element);
    element = [];
  }
}

console.log(CSVarray);
