import React from 'react';

function Form() {
  return (
    <form>
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
