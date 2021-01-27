import React from 'react';


const CardRight = ({ app }) => {
  const cards = app.map((app, index) => (
        <div className='col-sm-12  col-md-6 col-lg-4 product-tile'>
          <div className='display-product'>
            <img src={app.links.mission_patch_small} alt={app.flight_number} loading='lazy' width='100%' height='100%'/>
            <br />
            <ul>
              <li><strong>{app.mission_name}</strong></li>
              <li><strong>Mission IDs: </strong>{app.mission_id}</li>
              <li><strong>Launch Year: </strong>{app.flight_number}</li>
              <li><strong>Successfull Launch: </strong>
              </li>
            </ul>
          </div>
        </div>
      )
)

  return cards
}


export default CardRight;
