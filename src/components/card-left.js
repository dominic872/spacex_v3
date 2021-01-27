import React from 'react';
import Filters from './filters';


const CardLeft = ({ filters }) => (
  <div className="filters">
    <strong>Filters</strong>
    <Filters filters={filters} />
  </div>
)
export default CardLeft;
