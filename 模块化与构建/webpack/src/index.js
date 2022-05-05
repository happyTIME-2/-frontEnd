import printMe from './print.js';

function component() {

  return import('lodash').then(({ default: _ }) => {
    const element = document.createElement('div');
    const btn = document.createElement('button')

    element.innerHTML = _.join(['hei', 'webpack'], ' ');
    btn.innerHTML = 'Click me an check the console';
    btn.onclick = printMe
    element.classList.add('hello');

    // const myIcon = new Image();
    // myIcon.src = Icon;

    // element.appendChild(myIcon);

    element.appendChild(btn)

    return element;
  }).catch((error) => `An ${error} occurred while loading the component`);
}

// document.body.appendChild(component());
component().then((component) => {
  document.body.appendChild(component);
})

if (module.hot) {
  module.hot.accept('./print.js', function() {
    console.log('Accepting the updated printMe module!');
    printMe();
  })
}