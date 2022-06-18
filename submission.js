const findSum = function(array) {
  const sum = array.reduce((acc, el) => acc + el, 0);
  return sum;
};

const findFrequency = function(array) {
  // your code here - don't forget to return an object!
};

const isPalindrome = function(str) {
  // your code here - don't forget to return a boolean!
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
  // your code here - don't forget to return a string!
};

const scoreScrabble = function(str) {
  // your code here - don't forget to return a number!
};
