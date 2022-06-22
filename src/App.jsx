import React, { useState} from 'react';
import Card from './components/Card';
import initialData from './helpers/initialData';
import fetchData from './services/api';

function App() {

  const [city, setCity] = useState('');
  const [data, setData] = useState(initialData);

  const handleSubmit = (event) => {
    //
    // Lidar com o Envio do Form
    //
    event.preventDefault();
    fetchData(city).then((response) => {
      setData(response);
    });
  
  }

  return (
    <div className="flex flex-col h-screen w-full items-center sm:justify-center">
      <form 
        onSubmit={ handleSubmit }
        className="fixed bottom-0 w-full flex p-4 justify-center sm:relative" 
      >
        <input 
          type="text" 
          placeholder="Cidade" 
          className="p-3 rounded-lg outline-none w-full flex-1 sm:max-w-[300px]"
          value={city}
          onChange={ ({ target : { value } }) => setCity(value)}
        />

        <button 
          type="submit"
          className="bg-blue-600 text-white p-3 rounded-lg font-bold ml-3"
        >
          Pesquisar
        </button>
      </form>
      
      <Card data={ data }/>
    </div>
  );
}

export default App;
