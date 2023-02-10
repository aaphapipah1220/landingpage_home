import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ListPages from './routes';


const App = () => {
  return (
    <BrowserRouter>
      <ListPages />
    </BrowserRouter>
  )
}

export default App

