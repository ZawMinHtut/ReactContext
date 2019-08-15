import React from 'react';
import { Navbar,Content, ThemeToggler } from './components';
import { ThemeContextProvider } from './themecontext';

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <Navbar />
        <Content />
        <ThemeToggler />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
