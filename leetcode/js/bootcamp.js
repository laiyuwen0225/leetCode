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

// === 2/8 Fizz buzz ===
function fizzBuzz(i) {
  for (let i = 1; i <= n; i++ ) {
    if (i % 15 === 0) {
      console.log("fizzbuzz");
    }else if (i % 3 === 0) {
      console.log("fizz") 
    }else if (i % 5 ===0) {
      console.log("buzz")
    }else{
      console.log(i)
    }
  }
}

// === 2/10 Array chunking ===
// function chunk(array, size) {
//   const chunked = [];

//   for (let element of array) {
//     // the last [] in chunked
//     const last = chunked[chunked.length - 1];
//     // !last ->first time
//     if (!last || last.length === size) {
//       chunked.push([element]);
//     } else {
//       last.push(element);
//     };
//   };
//   return chunked;
// };

// === 3/6 Array chunking ===
function chunk(array, size) {
  const chunked = [];
  let index = 0;

  while (index < array.length) {
    // firsttime:[index0,index0+2],second:[index2,index2+2]
    chunked.push(array.slice(index, index + size));
    index += size;
  };

  return chunked;
};
