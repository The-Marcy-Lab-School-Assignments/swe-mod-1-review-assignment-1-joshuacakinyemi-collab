/* 
Analyze the following code. Explain what happens when the function is called. Then, identify the bug and fix it.

<Your explanation goes here>

*/
const findAndRemove = (arr, target) => {
  const index = arr.indexOf(target);
  if (index !== -1) { // If indexOf can't find the target it'll send back -1
    arr.splice(index, 1); // This will cause the last varible of a array to be remove
  };
  return arr;
}

const items = ["apple", "banana", "orange"];
findAndRemove(items, "grape");
console.log(items); // This should print ["apple", "banana", "orange"]
