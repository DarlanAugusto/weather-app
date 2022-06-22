import React from 'react';
import propTypes from 'prop-types';

function Card({ data }) {

  const {
    location,
    current
  } = data;

  return (
    <div className="bg-white p-6 mt-10 rounded-lg shadow-md min-w-[220px]">
      <div className="text-center">
        <span className="block text-lg font-bold text-slate-700">{ location.name }</span>
        <span className="text-sm font-medium text-slate-400">{`${ location.region }, ${ location.country }`}</span>
      </div>
      
      <div className="font-bold text-slate-700 flex mt-4 justify-center">
        <span className="text-8xl">{ current.temp_c }</span>
        <span className="text-2xl mt-2">ºC</span>
      </div>

      <div className="items-center flex flex-col">
        <img src={ current.condition.icon } alt="icone" />
        <span>{ current.condition.text }</span>
      </div>
    </div>
  );
}

export default Card;

Card.propTypes = {
  data: propTypes.object,
}.isRequired;