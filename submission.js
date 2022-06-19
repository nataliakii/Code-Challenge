const findSum = function(array) {
  const sum = array.reduce((acc, el) => acc + el, 0);
  return sum;
};

const findFrequency = function(array) {
  // your code here - don't forget to return an object!
};

const isPalindrome = function(str) {
 const check = [...str].reverse().join('').toLowerCase();
 console.log(check === str.toLowerCase());
 return check === str.toLowerCase();
};

const largestPair = function(array) {
  const largest = array
    .map(function (a, i, arr) {
      return a * arr[i + 1];
    })
    .slice(0, -1)
    .reduce((acc, cur) => {
      if (acc > cur) return acc;
      else return cur;
    }, array[0]);
  console.log(largest);
  return largest;
};

const removeParenth = function(str) {
  const removed =
    str.slice(0, str.indexOf('(')) + str.slice(str.indexOf(')') + 1);
  console.log(removed);
  return removed;
};

const scoreScrabble = function(str) {
  let emptyArray = [];
  const a = [
    [1, 'a', 'e', 'i', 'o', 'u', 'l', 'n', 'r', 's', 't'],
    [2, 'd', 'g'],
    [3, 'b', 'c', 'm', 'p'],
    [4, 'f', 'h', 'v', 'w', 'y'],
    [5, 'k'],
    [8, 'j', 'x'],
    [10, 'q', 'z'],
  ];
  let newArray = [...str];
  for (let i = 0; i < newArray.length; i++) {
    for (const b of a) {
      let check = b.some(y => y === newArray[i]);
      if (check) emptyArray.push(Number(`${b[0]}`));
    }
  }
  console.log(emptyArray);
  const score = emptyArray.reduce((acc, el) => acc + el, 0);
  return score;
};
