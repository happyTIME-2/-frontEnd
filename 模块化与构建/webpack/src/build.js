const webpack = require('webpack');

// webpack({
//   // [配置对象](/configuration/)
// }, (err, stats) => { // [Stats Object](#stats-object)
//   if (err || stats.hasErrors()) {
//     // [在这里处理错误](#error-handling)
//     console.log(err);
//   }
//   // 处理完成
// });

const compiler = webpack({
  configuration: '../webpack.config.js'
});

compiler.run((err, stats) => {
  if (err || stats.hasErrors()) {
    console.log('test');
    // console.log('err:', err);
  }

  compiler.close((closeErr) => {
    // console.log('closeErr', closeErr);
  })
})

// const watching = compiler.watch({
//   aggregateTimeout: 300,
//   poll: undefined
// }, (err, stats) => {
//   console.log(stats);
// });