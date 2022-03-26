import React from 'react';
import ReactDOM from 'react-dom';
import {ThemeProvider} from 'styled-components';
import {PrismicProvider} from '@prismicio/react';

import App from './components/App';
import {client} from './prismic';

import theme from './styled/theme'
import Reset from './styled/Reset';
import Global from './styled/Global'


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