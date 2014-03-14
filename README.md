# gntr

> Tree traversal using ES6 generators, influenced by [pep-0255](http://legacy.python.org/dev/peps/pep-0255/)

Currently you must use the `--harmony-generators` flag when running node 0.11.x to get access to generators.

## Installation: 

```
$ npm install gntr

```

```
## Example:

```js
var gntr = require('gntr');
var root = gntr.tree(['A','B','C','D','E','F','G','H','I']);
var results = [];

for (let value of gntr.preorder(root)) {
    results.push(value);
}

console.log(results);
// Would log  ['F', 'B', 'A', 'D', 'C', 'E', 'G', 'I', 'H']
```
