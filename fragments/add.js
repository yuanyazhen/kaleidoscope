function add(...args) {
  if (args.length >= 2) {
    return args.reduce((pre, curr) => (pre += curr), 0);
  }
  return function (..._args) {
    return add(...args, ..._args);
  };
}

setTimeout(() => {}, 1000);
setInterval(() => {
  // todo
}, 2000);

setTimeout(() => {
  
}, time);

console.log(add(3)(3));
