'use client';

import React from 'react';
import Chart from './chart';
import EtherPrice from './ether-price';
import LastBlock from './last-block';
import MarketCap from './market-cap';
import Transactions from './transactions';

const MainBox: React.FC = () => {

  return (
    <div id='mainbox' className='card py-5 px-2 mb-4 -mt-12 mx-0 bg-[var(--bs-bg-color)] border-[var(--bs-border-color)]'>
      <div className='row text-[var(--bs-text-color)]'>
        <div className='md:w-1/2 lg:w-1/3 px-3'>
          <EtherPrice />
          <hr className='my-5 border-[var(--bs-border-color)]' />
          <MarketCap />
        </div>
        <div className='md:w-1/2 md:border-l px-3 md:border-solid md:border-[var(--bs-border-color)] lg:w-1/3'>
          <Transactions />
          <hr className='my-5 border-[var(--bs-border-color)]' />
          <LastBlock />
        </div>
        <div className='lg:w-1/3 px-3 min-[992px]:border-l min-[992px]:border-solid min-[992px]:border-[var(--bs-border-color)]'>
          <hr className='block min-[992px]:hidden my-5' />
          <div className='text-cap mb-[1px]'>
            Transaction History in 14 days
          </div>
          <div className='w-full pt-2 h-[105px] overflow-hidden'>
            <Chart />
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainBox;