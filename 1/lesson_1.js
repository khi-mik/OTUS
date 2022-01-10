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

/// Task 1
function onClickTask1() {

}

/// Task 2
function onClickTask2() {
    alert( sum() );
    alert( sum(1)() );
    alert( sum(1)(2)(3)(10)() );
}
