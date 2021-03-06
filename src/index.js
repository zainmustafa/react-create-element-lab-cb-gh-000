import React from 'react';
import ReactDOM from 'react-dom';

// IMPORTANT!!!! uncomment the lines below to make your tests work

const ul = React.createElement('ul', { className : 'my-interests'},
      [
        React.createElement('li', {}, 'JavaScript'),
        React.createElement('li', {}, 'React'),
        React.createElement('li', {}, 'Movies'),
        React.createElement('li', {}, 'Ice cream')
      ])
const p = React.createElement('p', {},'Who is learning React')
const h1 = React.createElement('h1', {},'An Awesome Person')
const meInReact = React.createElement('div', {className : 'me'},[h1, p, ul])

ReactDOM.render(
  meInReact,
  document.getElementById('root')
);

export default meInReact
