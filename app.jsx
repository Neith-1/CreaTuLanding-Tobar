import React, { useState } from 'react';
import NavBar from './NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  const mensaje = "¡Bienvenido a nuestra tienda!";

  return (
    <div className="App">
      <NavBar />
      <ItemListContainer mensaje={mensaje} />
    </div>
  );
}

export default App();
