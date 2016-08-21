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
```

Expected output:

```sh
babel-node ./src/index.js
>>> [./src/types/MutationType.js] named BlogType
>>> [./src/types/MutationType.js] default BlogType
>>> [./index.js] named BlogType
>>> [./index.js] default BlogType
```
