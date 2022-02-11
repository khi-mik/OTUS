/// Task 1
const arr1 = [["a", "b"], ["a", "c"], ["d", "e"]];

const arr2 = [
    ["q", "w", 'a'],
    ["a", "b"],
    ["a", "c"],
    ["q", "e"],
    ["q", "r"]
  ];  

const arr3 = [
    ["a", "b"],
    ["a", "c"],
    ["q", "e"],
    ["q", "r"],
    ["q", "w", 'a']
  ];

let getMaxItemAssociation = function(arr) {
  
  function arrayEquals(a, b) {
    return Array.isArray(a) && Array.isArray(b) && a.length === b.length && a.every((val, index) => val === b[index]);
  }

  function concatArrays(a) {
    let b = [];
    for(i=0; i<a.length; i++){
      b = b.concat(a[i])
    }
    return b;
  }

  let getInterceptedArrays = function(array) {
    let resultArray = [];
    let resultArrayOfArrays = [];

    for(let i=0; i<array.length; i++){
      array.forEach(subArr => {
        if(!arrayEquals(subArr, array[i])) {

          let arrDup = [ ...subArr, ...array[i] ].sort();
          let arrNoDup = [...new Set([...subArr, ...array[i] ])].sort();
  
          if(!arrayEquals(arrDup, arrNoDup)) {
            resultArray.unshift(arrNoDup);
          }
        }
      });
      
      if(resultArray.length === 0){
        resultArray = array[0];
      }

      resultArrayOfArrays.unshift( [...new Set([...concatArrays(resultArray) ])].sort() );
    }
    return resultArrayOfArrays;
  }

  let resultArray = getInterceptedArrays( arr );

  let maxIndex = 0;
  for(let i = 1; i < resultArray.length; i++){
    if(resultArray[maxIndex].length < resultArray[i].length)
      maxIndex = i;
  }
  
  return resultArray[maxIndex];
};

function onClickTask1() {
    console.log('CASE_1: ' + getMaxItemAssociation(arr1));
    console.log('CASE_2: ' + getMaxItemAssociation(arr2));
    console.log('CASE_3: ' + getMaxItemAssociation(arr3));
}


/// Task 2
const curry = function(fn) {

    const _curry = (...args) => {
      return arg => {
        if (!arg) {
          return args.reduce((a, b) => {
            return fn(a, b)
          }, 0);
        }
        return _curry(...args, arg);
      };
    };
    
    return _curry();
  };
  const sum = curry((x, y) => x + y);

function onClickTask2() {
    alert( sum() );
    alert( sum(1)() );
    alert( sum(1)(2)(3)(10)() );
}