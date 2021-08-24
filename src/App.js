import React from 'react';
import Home from './pages/Home/index';
import theme from './theme'
import { ThemeProvider } from 'styled-components';
import{ Reset } from 'styled-reset';



function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
       <Reset/>
      <Home/>
      </ThemeProvider>
    </div>
  );
}

export default App;
