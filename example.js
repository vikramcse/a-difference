var diff = require('./index.js');
console.log(diff(['github', 'a', 'b', 'facebook'], ['b'], ['github', 'e']));
// -> ['a', 'facebook', 'e']
