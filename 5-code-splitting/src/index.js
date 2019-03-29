function getComponent() {
  return import(/* webpackChunkName: "lodash" */ 'lodash').then(({default: _ }) => {
    var element = document.createElement('div');

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    return element;
  }).catch(err => 'An error occured.'); 
}

getComponent().then(component => {
  document.body.appendChild(component);
})