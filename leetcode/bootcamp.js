// add a 'debugger;' statement in your function(where need to show bugs)
// call the function manually -> reverse('abcd')
// at the terminal, run 'node inspect index.js'
// to continue execution of the file, press'c' then 'enter'
// to launch a 'repl' session, type 'repel' then 'enter'
// to exit the 'repl',press Control+C

// === 2/1 reverse string===
// solution 1
// function reverse(str) {
//   return str
//     .split('')
//     .reverse()
//     .join('');
// };
// solution 2
// avoid to use 'for loop' in the interview-->type error always happen
// function reverse(str) {
//   let reversed = '';
//   for (let char of str) {
//     reversed = char + reversed;
//   };
//   return reversed;
// };
// solution 3
// function reverse(str) {
//   return str.split('').reduce((reversed, char) => char + reversed,'')
// };

// === 2/2 palindromes 回文＝＝＝






