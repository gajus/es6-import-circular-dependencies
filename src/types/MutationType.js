import {
    BlogType
} from './';
import BlogTypeDefault from './BlogType';

console.log('>>> [./src/types/MutationType.js]', 'named', BlogType);
console.log('>>> [./src/types/MutationType.js]', 'default', BlogTypeDefault);

setTimeout(() => {
    console.log('>>> [./src/types/MutationType.js]', 'named', 'setTimeout', BlogType);
    console.log('>>> [./src/types/MutationType.js]', 'default', 'setTimeout', BlogTypeDefault);
}, 100);
