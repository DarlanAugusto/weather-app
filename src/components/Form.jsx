import React from 'react';
import fetchData from '../services/api.js'

function Form() {
  const handleSubmit = (event) => {
    //
    // Lidar com o Envio do Form
    //
    event.preventDefault();
    fetchData("Guararapes").then((response) => {
      console.log(response);
    });
  
  }

  return (
    <form onSubmit={ handleSubmit }>
      <input 
        type="text" 
        placeholder="Cidade" 
        className="p-3 rounded-lg outline-none"
      />

      <button 
        type="submit"
        className="bg-blue-600 text-white p-3 rounded-lg font-bold ml-3"
      >
        Pesquisar
      </button>
    </form>
  );
}

export default Form;
