// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

function myfunction() {
  let str = "Steve is the best TL!!!";
  function closure(){
    let newStr = "Steve is in the closure";
    alert(`${str} ${newStr}`);
  }
  closure();
}
myfunction();

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  let count = 0;
  return () => {
    return ++count;
  }
};

const newCounter = counter();
console.log(newCounter());
console.log(newCounter());
console.log(newCounter());

// Return a function that when invoked increments and returns a counter variable.
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};
