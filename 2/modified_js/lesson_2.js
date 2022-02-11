var fn1 = () => {
  console.log('fn1')
  return Promise.resolve(1)
}

var fn2 = () => new Promise(resolve => {
  console.log('fn2')
  setTimeout(() => resolve(2), 1000)
})

var fn3 = () => new Promise(resolve => {
  console.log('fn3')
  setTimeout(() => resolve(3), 2000)
})

var fn4 = () => new Promise(resolve => {
  console.log('fn4')
  setTimeout(() => resolve(4), 2000)
})

var execFunc = function (memo, value) { 
  console.log('reduce'); 
  return memo * value  
}

function promiseReduce(asyncFunctions, reduce, initialValue) { 
  
  return asyncFunctions.reduce( (result, func) => {
    return result.then( value => { 
      return func().then( ret => { 
        return reduce(value, ret);  
      });
    });  
  }, Promise.resolve(initialValue));
}

const button1 = document.getElementById("mcxBtn1");
const button2 = document.getElementById("mcxBtn2");
const button3 = document.getElementById("mcxBtn3");


button1.onclick = function() {
  console.log("-- Test-1 --");
  promiseReduce([fn1, fn2], execFunc, 1).then(console.log);
}

button2.onclick = function() {
  console.log("-- Test-2 --");
  promiseReduce([fn1, fn2, fn3], execFunc, 2).then(console.log);
}

button3.onclick = function() {
  console.log("-- Test-3 --");
  promiseReduce([fn1, fn2, fn3, fn4], execFunc, 3).then(console.log);
}
