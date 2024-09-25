const mapForEach = (arr, fn) => {
  let newArr = [];
  for (var i = 0; i < arr.length; i++) {
    newArr.push(fn(arr[i]));
  }
  return newArr;
};

const arr1 = [1, 2, 3];
console.log(arr1);

const newMapArr = mapForEach(arr1, function (item) {
  return item * 2;
});

console.log(newMapArr);

