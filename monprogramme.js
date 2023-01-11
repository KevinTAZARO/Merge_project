//merging

const { INSPECT_MAX_BYTES } = require('buffer');
const fs = require('fs');
const fileName = process.argv[2];

try {
  const data = fs.readFileSync(fileName, 'utf8');
  let turn = 0;
  let array = data.split(' ').map(x => Number(x));

  function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
  }

  function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    let middle = Math.floor(arr.length / 2);
    let left = arr.slice(0, middle);
    let right = arr.slice(middle);
    return merge(mergeSort(left), mergeSort(right));
  }

  array = mergeSort(array);
  console.log(`Tri fusion: ${turn} comparaisons [${array}]`);

} catch (error) {
  console.error(error.message);
};