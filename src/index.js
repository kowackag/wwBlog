import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import {ThemeProvider} from 'styled-components';
import theme from './styled/theme'
// import reportWebVitals from './reportWebVitals';
import {PrismicProvider} from '@prismicio/react';
import {client} from './prismic';
import Reset from './styled/Reset';
import Global from './styled/Global'
console.log(client)
ReactDOM.render(
    <ThemeProvider theme={theme}>
      <PrismicProvider client={client}>
      <Reset/>
      <Global/>
      <App />
      </PrismicProvider>
    </ThemeProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
