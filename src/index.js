import React from 'react';
import ReactDOM from 'react-dom';
// import { createStore } from 'redux';
// import { Provider } from 'react';

import App from './components/app';
// import reducer from './reducer';
// import * as actions from './actions';
// import { Provider } from 'react-redux';

// const store = createStore(reducer);
// const { dispatch } = store;

// const { inc, dec, rnd } = 
//   bindActionCreators(actions, dispatch);


// document
//   .getElementById('inc')
//   .addEventListener('click', inc);

// document
//   .getElementById('dec')
//   .addEventListener('click', dec);

// document
//   .getElementById('rnd')
//   .addEventListener('click', () => {
//   const payload = Math.floor(Math.random()*19);
//   rnd(payload)});

// const update = () => {
ReactDOM.render(
  // <Provider store={store}>
    <App />,
  // </Provider>, 
  document.getElementById('root')
)  
    // <Counter 
    //   counter = {store.getState()}
    //   inc = {inc}
    //   dec = {dec}
    //   rnd = {() => {
    //     const value = Math.floor(Math.random()*19);
    //     rnd(value);}}  
    //     />, document.getElementById('root')
  // );
  // document
  //   .getElementById('counter')
  //   .innerHTML = store.getState();
// };

// update();
// store.subscribe(update);

