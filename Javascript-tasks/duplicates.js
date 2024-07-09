let data = [10, 20, 30, 40, 10, 20];
// find the duplicate numbers from the array

function CheckDuplicate(arr) {
  let object = {};

  let i = 0;
  while (i < arr.length) {
    if (object[arr[i]] === undefined) {
      object[arr[i]] = 1;
    } else {
      object[arr[i]] = object[arr[i]] + 1;
    }
    i++;
  }

  for (let key in object) {
    if (object[key] > 1) {
      console.log("duplicates", key);
    }
  }
}

CheckDuplicate(data);
