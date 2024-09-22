import React from 'react';
import ReactDOM from 'react-dom/client';

const element = React.createElement(
  'a',
  { href: 'https://google.pl' },
  'Google'
);

console.log(element);

ReactDOM.createRoot(document.getElementById('root')).render(element);
