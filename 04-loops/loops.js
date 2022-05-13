/* eslint-disable no-unused-vars */

// repeat function
const repeat = (str, num) => {
  let repeatedString = '';

  for (let i = 0; i < num; i++) {
    repeatedString = repeatedString.concat(str);
  }

  return repeatedString;
};

// sum function
const sum = (ary) => {
  let result = 0;

  for (let i = 0; i < ary.length; i++) {
    result += ary[i];
  }

  return result;
};

// join function
const join = (ary, delim) => {
  let joinedStr = '';

  for (let i = 0; i < ary.length; i++) {
    joinedStr = joinedStr.concat(ary[i]);

    if (delim && i < ary.length - 1) {
      joinedStr = joinedStr.concat(delim);
    }
  }

  return joinedStr;
};

// gridGenerator function
const gridGenerator = (num) => {
  let grid = '';

  for (let i = 0; i < num; i++) {
    let isOdd = (int) => {
      if (int % 2 > 0) return true;
      else return false;
    };

    if (isOdd(num) && !isOdd(i)) {
      grid = grid.concat('# #\n');

      if (i < num - 1) {
        grid = grid.concat(' ');
      }
    }

    if (isOdd(num) && isOdd(i)) {
      grid = grid.concat('# \n');
    }

    if (!isOdd(num)) {
      grid = grid.concat('#');

      if (i < num - 1) {
        grid = grid.concat(' \n ');
      }
      if (i === num - 1) {
        grid = grid.concat('\n');
      }
    }
  }

  return grid;
};

// paramify function
const paramify = (obj) => {
  let unsortedAry = [];

  // push all keys/value pairs as strings to new array, ignoring numberable properties in the prototype
  for (let i in obj) {
    if (obj.hasOwnProperty(i)) {
      unsortedAry.push(`${i}=${obj[i]}`);
    }
  }

  // sort new array alphabetically as a string, joined by '&'
  let sortedStr = unsortedAry.sort().join('&');

  return sortedStr;
};

// paramifyObjectKeys function
const paramifyObjectKeys = (obj) => {
  let sortedAry = [];

  // sort keys/value pairs, ignoring numberable properties in the prototype
  let sortedObj = Object.keys(obj)
    .sort()
    .reduce((r, k) => ((r[k] = obj[k]), r), {});

  //created ordered array of key/value pairs as strings
  for (let i in sortedObj) {
    sortedAry.push(`${i}=${sortedObj[i]}`);
  }

  // sort new array alphabetically as a string, joined by '&'
  let sortedStr = sortedAry.sort().join('&');

  return sortedStr;
};

// sort function
const sort = (items, leftIdx = 0, rightIdx = items.length - 1) => {
  // define the index
  let index;

  // returns for edge cases
  if (items.length === 0) return [];
  if (items.length === 1) return items;

  // swap helper function
  const swap = (array, leftIndex, rightIndex) => {
    let temp = array[leftIndex];
    array[leftIndex] = array[rightIndex];
    array[rightIndex] = temp;
  };

  // partition helper function
  const partition = (array, leftIdx, rightIdx) => {
    let pivot = array[Math.floor((leftIdx + rightIdx) / 2)];
    console.log(pivot);
    let i = leftIdx;
    let j = rightIdx;

    while (i <= j) {
      while (array[i] < pivot) {
        i++;
      }
      while (array[j] > pivot) {
        j--;
      }
      if (i <= j) {
        swap(array, i, j);
        i++;
        j--;
      }
    }
    return i;
  };

  // primary sort function
  if (items.length > 1) {
    index = partition(items, leftIdx, rightIdx);

    if (leftIdx < index - 1) {
      sort(items, leftIdx, index - 1);
    }
    if (index < rightIdx) {
      sort(items, index, rightIdx);
    }
  }
  return items;
};
