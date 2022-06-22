import React from 'react';
import Card from './components/Card';
import fetchData from './services/api.js';

function App() {

  const [city, setCity] = useState('Araçatuba');
  const [data, setData] = useState({});

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
    <div className="flex flex-col h-screen w-full items-center justify-center">
      <form onSubmit={ handleSubmit }>
        <input 
          type="text" 
          placeholder="Cidade" 
          className="p-3 rounded-lg outline-none"
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
