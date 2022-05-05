const getMes = require('./b')

console.log("我是a文件")

console.log(__filename);
console.log(__dirname);

exports.say = function() {
  const message = getMes()
  console.log(message)
}