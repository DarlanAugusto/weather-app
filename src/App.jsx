import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

function App() {
  return (
    <div className="flex flex-col h-screen w-full items-center justify-center">
      <Form />
      <Card />
    </div>
  );
}

export default App;
