import React from 'react';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle } from '../globalStyle';
import { PRIMARY_COLOR } from '../utils/theme';

function App(props) {
  return (
    <ThemeProvider theme={{ PRIMARY_COLOR }}>
      <GlobalStyle />
      <div className={'app'}>{props.children}</div>
    </ThemeProvider>
  );
}

export default App;
