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
