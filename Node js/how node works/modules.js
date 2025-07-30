// console.log(arguments);
// console.log(require('module').wrapper);
//
const C = require('./test-module1.js');

const calc1 = new C();
console.log(calc1.add(2, 3));

const { add, multiply } = require('./test-module2.js')
console.log(multiply(8, 3));
//// caching 

require('./test-module3.js')();
require('./test-module3.js')();
require('./tnst-module3.js')();
