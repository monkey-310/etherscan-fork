import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

const MarketCap = () => {
  return (
    <div className='flex'>
      <div className='mr-3'>
        <FontAwesomeIcon icon={faGlobe} width={24} />
      </div>
      <div className='flex-grow'>
        <div className='text-cap mb-[1px]'>
          Market Cap
        </div>
        <a href="#" className='text-4'>
          $455,258,576,856.00
        </a>
      </div>
    </div>
  )
}

export default MarketCap;
