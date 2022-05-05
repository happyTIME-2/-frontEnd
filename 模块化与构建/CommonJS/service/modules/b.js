const say = require('./a')

const object = {
  name: '小强是个新手',
  author: 'john'
}

console.log('我是b文件')

module.exports = function () {
  return object
}
