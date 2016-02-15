# a-difference
Returns the values from array that are not present in the other arrays

# Install
```sh
$ npm install --save a-difference
```

## Examples

```js
var diff = require('a-difference');

console.log(diff(['github', 'a', 'b', 'facebook'], ['b'], ['github', 'e']));
// -> ['a', 'facebook', 'e']

```

## Usage

#### `require('a-difference')( *array )`

**Arguments**:
- `*array`: sequence of arrays
- Other arguments except of type array are ignored

**Returns**: Returns values from array that are not present in the other arrays

## License
&copy; 2016 vikram. MIT License