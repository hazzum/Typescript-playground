// Concatenate two arrays
type Obj = (number | string)

const concatArr = (arr1:Obj[], arr2:Obj[]):Obj[] => {
    return [...arr1, ...arr2];
  };
  
  // Add numbers in an array
  
  const addArr = (arr:number[]) => {
    let total = 0;
    arr.forEach((x) => {
      total += x;
    });
    return total;
  };
  
  // Find the largest number in an array
  const lgNum = (arr:Obj[]):number => {
    let largest = 0 as number;
    arr.forEach((x) => {
      if (x > largest) {
        largest = x as number;
      }
    });
    return largest;
  };
  
  // Remove the 3rd item from an array
  const cut3 = (arr:Obj[]) => {
    arr.splice(2, 1);
    return arr;
  };
  
  export default {
    concatArr,
    addArr,
    lgNum,
    cut3,
  };
  