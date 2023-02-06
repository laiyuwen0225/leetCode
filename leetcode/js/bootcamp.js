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
// function palindrome(str) {
//   const reversed = str
//     .split('')
//     .reverse()
//     .join('');

//   return str === reversed;
// };

// function palindrome(str) {
//   return str.split('').every((char,index) => {
//     return char === str[str.length - 1 - index]
//   });
// }

// === 2/7 reverse int ===
function reverseInt(n) {
  const reversed = n
    .toString()
    .split('')
    .reverse()
    .join('')
    // parseInt():ignore "-"
    // if (n < 0) {
    //   return parseInt(reversed) * -1;
    // }
    // return parseInt(reversed);
    return parseInt(reversed) * Math.sign(n);
}

// === 2/7 ;Max Chars Problem ===
function maxChar(str) {
  const charMap = {};
  let max = 0;
  let charMax = '';

  // for of -> iterating through array or string
  for (let char of str) {
    if (charMap[char]) {
      charMap[char]++;
    } else {
      charMap[char] = 1;  // count once
    }
  }
  // for in -> iterating througn Object of key/value pair
  for (let char in charMap) {
    if (charMap[char] > max) {
      max = charMap[char];
      charMax = char;
    }
  }
  return charMax;
}


