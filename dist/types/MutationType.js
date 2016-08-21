'use strict';

var _ = require('./');

var _BlogType = require('./BlogType');

var _BlogType2 = _interopRequireDefault(_BlogType);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

setTimeout(() => {
    console.log('>>> [./src/types/MutationType.js]', 'named', _.BlogType);
    console.log('>>> [./src/types/MutationType.js]', 'default', _BlogType2.default);
}, 100);