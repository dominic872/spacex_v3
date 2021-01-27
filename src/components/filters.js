import React from 'react';
import Filter from './filter';

const Filters = ({ filters, clickAction }) => {
  const filter = filters.map((index) => (

    <div>
      <span>{index.filter_name}</span>
      <div className={index.class_name}>
        <Filter labels={index.data} class_name={index.class_name} /> 
      </div>
    </div>

  ))
return filter
}



export default Filters;
