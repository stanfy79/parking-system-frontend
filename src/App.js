
import Home from './components/Home';
import React from 'react';
import './App.css';
import ErrorBoundary from './ErrorBoundary';


function App() {

  return (
    <ErrorBoundary fallback="Sorry, There Was an Error">
    <Home />
    </ErrorBoundary>
  );
}

export default App;
