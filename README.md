To replicate the issue:

```sh
git clone git@github.com:gajus/es6-import-circular-dependencies.git
cd ./es6-import-circular-dependencies
export PATH="./node_modules/.bin:${PATH}"
npm install

babel-node ./src/index.js
>>> [./src/types/MutationType.js] named undefined
>>> [./src/types/MutationType.js] default BlogType
>>> [./index.js] named BlogType
>>> [./index.js] default BlogType
>>> [./src/types/MutationType.js] named setTimeout BlogType
>>> [./src/types/MutationType.js] default setTimeout BlogType
```

Expected output:

```sh
babel-node ./src/index.js
>>> [./src/types/MutationType.js] named BlogType
>>> [./src/types/MutationType.js] default BlogType
>>> [./index.js] named BlogType
>>> [./index.js] default BlogType
>>> [./src/types/MutationType.js] named setTimeout BlogType
>>> [./src/types/MutationType.js] default setTimeout BlogType
```

Note, this example is extracted from a large code base.

It is easy to spot this circular dependency in this example. In a large code base, where `./src/types/MutationType.js` is imported by a sub-dependency, this circular reference is a lot harder to detect/ fix.

The reason the example using `setTimeout` works, is because of how the code gets transpiled to the ES5:

```js
var _ = require('./');

var _BlogType = require('./BlogType');

var _BlogType2 = _interopRequireDefault(_BlogType);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

setTimeout(() => {
    console.log('>>> [./src/types/MutationType.js]', 'named', _.BlogType);
    console.log('>>> [./src/types/MutationType.js]', 'default', _BlogType2.default);
}, 100);
```

In the ES6 code, `BlogType` is a reference to a variable. In the transpiled code, it becomes a reference to an object property `_.BlogType`.
