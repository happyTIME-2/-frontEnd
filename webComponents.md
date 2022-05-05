### Web Component

1、Custom elements（自定义元素）：一组JavaScript API，允许您定义custom elements及其行为，然后可以在您的用户界面中按照需要使用它们。
2、Shadow DOM（影子DOM）：一组JavaScript API，用于将封装的“影子”DOM树附加到元素（与主文档DOM分开呈现）并控制其关联的功能。通过这种方式，您可以保持元素的功能私有，这样它们就可以被脚本化和样式化，而不用担心与文档的其他部分发生冲突。
3、HTML templates（HTML模板）： `<template>` 和 `<slot>` 元素使您可以编写不在呈现页面中显示的标记模板。然后它们可以作为自定义元素结构的基础被多次重用。

### 实现web component的基本方法：
- 创建一个类或函数来指定web组件的功能，如果使用类，请使用 ECMAScript 2015 的类语法(参阅类获取更多信息)。
- 使用 CustomElementRegistry.define() 方法注册您的新自定义元素 ，并向其传递要定义的元素名称、指定元素功能的类、以及可选的其所继承自的元素。
- 如果需要的话，使用Element.attachShadow() 方法将一个shadow DOM附加到自定义元素上。使用通常的DOM方法向shadow DOM中添加子元素、事件监听器等等。
- 如果需要的话，使用 `<template>` 和`<slot>` 定义一个HTML模板。再次使用常规DOM方法克隆模板并将其附加到您的shadow DOM中。
- 在页面任何您喜欢的位置使用自定义元素，就像使用常规HTML元素那样。

#### 示例：
```js
// 这个元素叫做 word-count，它的类对象是 WordCount, 继承自 <p> 元素.
customElements.define('word-count', WordCount, { extends: 'p' });


class WordCount extends HTMLParagraphElement {
  constructor() {
    // 必须首先调用 super 方法
    super();

    // 元素的功能代码写在这里

    ...
  }
}
