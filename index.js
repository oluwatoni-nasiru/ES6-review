// index.js

import {
    Calculator,
    greetUser,
    simulateFetchData,
    processData,
    doubleNumbers
  } from './tools.js';
  
  // CLASS usage
  const calc = new Calculator(5);
  console.log('Multiply by 3:', calc.multiply(3)); // 15
  console.log('Reset:', calc.reset()); // 0
  
  // SYNC FUNCTION
  console.log(greetUser('Oluwatoni')); // Welcome, Oluwatoni!
  
  // PROMISE
  simulateFetchData('user info').then(result => {
    console.log('Promise:', result); // Fetched: user info
  });
  
  // ASYNC
  (async () => {
    const processed = await processData('some data');
    console.log('Async Processed:', processed); // FETCHED: SOME DATA
  })();
  
  // MAP FEATURE
  const original = [10, 20, 30];
  const doubled = doubleNumbers(original);
  console.log('Doubled Numbers:', doubled); // [20, 40, 60]  