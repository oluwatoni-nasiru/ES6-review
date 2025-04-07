// tools.js

// CLASS
export class Calculator {
    constructor(initialValue = 0) {
      this.value = initialValue;
    }
  
    multiply(factor) {
      this.value *= factor;
      return this.value;
    }
  
    reset() {
      this.value = 0;
      return this.value;
    }
  }
  
  // SYNC FUNCTION
  export function greetUser(username) {
    return `Welcome, ${username}!`;
  }
  
  // PROMISE FUNCTION
  export function simulateFetchData(data) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(`Fetched: ${data}`);
      }, 1500);
    });
  }
  
  // ASYNC FUNCTION
  export async function processData(input) {
    const response = await simulateFetchData(input);
    return response.toUpperCase();
  }
  
  // MAP FEATURE
  export function doubleNumbers(arr) {
    return arr.map(num => num * 2);
  }
  