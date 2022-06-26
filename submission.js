const findSum = function(array) {
  const sum = array.reduce((acc, el) => acc + el, 0);
  return sum;
};

const findFrequency = function(array) {
    let result = {};
  for (let i = 0; i < array.length; i++) {
    const char = array[i];
    result[char] = (result[char] || 0) + 1;
  }
  console.log(result);
  let result2 = {};
  result2.most = array[0];
  result2.least = array[0];

  const result1 = Object.entries(result);
  let max = result1[0][1];
  let min = result1[0][1];

  for (let x = 1; x < result1.length; x++) {
    if (result1[x][1] > max) {
      max = result1[x][1];
      result2.most = result1[x][0];
    } else if (result1[x][1] < min) {
      min = result1[x][1];
      result2.least = result1[x][0];
    }
  }
  return result2;
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
  return largest;
};

const removeParenth = function(str) {
  const removed =
    str.slice(0, str.indexOf('(')) + str.slice(str.indexOf(')') + 1);
  return removed;
};

const scoreScrabble = function(str) {
  const a = [
    [1, 'a', 'e', 'i', 'o', 'u', 'l', 'n', 'r', 's', 't'],
    [2, 'd', 'g'],
    [3, 'b', 'c', 'm', 'p'],
    [4, 'f', 'h', 'v', 'w', 'y'],
    [5, 'k'],
    [8, 'j', 'x'],
    [10, 'q', 'z'],
  ];
  let emptyArray = [];
  let newArray = [...str];
  for (let i = 0; i < newArray.length; i++) {
    for (const b of a) {
      let check = b.some(y => y === newArray[i]);
      if (check) emptyArray.push(Number(`${b[0]}`));
    }
  }
  const score = emptyArray.reduce((acc, el) => acc + el, 0);
  return score;
};
