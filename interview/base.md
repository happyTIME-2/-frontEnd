# HTML

#### 页面导入样式时，使用link和@import有什么区别？
```html
1) 从属关系区别，@import是css提供的语法规则，只有导入样式表的作用；link是html提供的标签，不仅可以加载css样式，还可以定义rss、rel连接属性、引入网站图标等
2）加载顺序区别。加载页面时，link标签引入的css被同时加载；@import引入的css只有在页面加载完毕后被加载；
3）dom可控性区别。可以通过js操作dom，插入link标签来改变样式；由于dom方法是基于文档的，无法使用@import方式插入样式。
```

#### async和defer的区别？
> 1) 脚本没有defer或async，浏览器会立即加载并执行指定的脚本，也就是说不等待后续加载的文档元素，读到就加载并执行
2）defer属性表示延迟执行引入的js，即这段js加载时html并未停止解析，这两个过程是并行的。当整个document解析完毕后再执行脚本文件，再DOMContentLoaded事件触发之前完成，多个脚本按顺序执行。
3）async属性表示异步执行引入的js，跟defer的区别在于，如果已经加载好，就会开始执行，也就是说他的执行仍然会阻塞文档的解析，只是它的加载过程不会阻塞。多个脚本的执行顺序无法保证。

[async-vs-defer-attributes](https://www.growingwiththeweb.com/2014/02/async-vs-defer-attributes.html)