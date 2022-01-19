/// Task 1
const arr1 = [["a", "b"], ["a", "c"], ["d", "e"]];
const arr2 = [
    ["q", "w", 'a'],
    ["a", "b"],
    ["a", "c"],
    ["q", "e"],
    ["q", "r"],
  ];

  let getMaxIndex = function(arr) {
    let maxIndex = 0;
    for(let i = 1; i < arr.length; i++){
        if(Array(arr[maxIndex]).length < Array(arr[i]).lengthlength)
            maxIndex = i;
    }
    return maxIndex;
  }

  let getMaxItemAssociation = function(array1) {
    let result = [];
    let array2 = []; 
    let array3 = []; 
    let resArray = [];  
    for(let j = 0; j < array1.length; j++) {
        array2 = array1[j];

        result = [];
        for(let z = 0; z < array1.length; z++){
            array3 = array1[z]; 
            array2.forEach ( 
                function(item) {
                    if(array3.includes(item)) { 
                        if (array2 != array3) {
                           result.push( [...new Set([...array2, ...array3])].sort() ); 
                        } 
                    }
                }
            )
        }

        for(let i=1; i < result.length; i++) {
            result[0] = [...new Set([...result[0], ...result[i]])].sort();
        }
        resArray.push(result[0]);
    }

    
    return resArray[getMaxIndex(resArray)];
  }

function onClickTask1() {
    console.log('CASE_1: ' + getMaxItemAssociation(arr1));
    console.log('CASE_2: ' + getMaxItemAssociation(arr2));
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