import React from 'react';

function Card({ data }) {
  console.log(data);

  return (
    <div className="bg-white p-6 mt-10 rounded-lg shadow-md">
      <div className="text-center">
        <span className="block text-lg font-bold text-slate-700">Guararapes</span>
        <span className="text-sm font-medium text-slate-400">São Paulo, Brasil</span>
      </div>
      
      <div className="font-bold text-slate-700 flex mt-4 justify-center">
        <span className="text-8xl">35</span>
        <span className="text-2xl mt-2">ºC</span>
      </div>

      <div className="items-center flex flex-col">
        <img src="" alt="icone" />
        <span>nublado</span>
      </div>
    </div>
  );
}

export default Card;