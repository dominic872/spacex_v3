import React from 'react';
import Title from './title';
import CardLeft from './card-left';
import CardRight from './card-right';

const Card = ({ apps, filters}) => (

    <div>
      <Title name={`SpaceX Launch Programs`}/>
      <div className="row">
        <div className="col-sm-12 col-md-4 col-lg-3 filter-group">
        <CardLeft filters={filters} key={filters.length}/>
        </div>
          <div className="col-sm-12 col-md-8 col-lg-9 products">
            <div className="row product-group">
                <CardRight app={apps} />
              </div>
          </div>
        </div>
      </div>
)

export default Card;
