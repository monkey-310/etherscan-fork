'use client';

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faServer, faGauge } from '@fortawesome/free-solid-svg-icons';
import Chart from '../../dashboard/chart';
import EtherPrice from './ether-price';
import LastBlock from './last-block';

const MainBox: React.FC = () => {

  return (
    <div id='mainbox' className='card py-5 px-4 mb-4 -mt-12 mx-2 bg-[var(--bs-bg-color)] border-[var(--bs-border-color)]'>
      <div className='row text-[var(--bs-text-color)]'>
        <div className='md:w-1/2 lg:w-1/3'>
          <EtherPrice />
          <hr className='my-5 border-[var(--bs-border-color)]' />
          <div className='flex'>
            <div className='mr-3'>
              <FontAwesomeIcon icon={faGlobe} width={24} />
            </div>
            <div className='flex-grow'>
              <div className='text-cap mb-[1px]'>
                Market Cap
              </div>
              <a href="/stat/supply" className='text-4'>
                $455,258,576,856.00
              </a>
            </div>
          </div>
        </div>
        <div className='md:w-1/2 md:border-l md:border-solid md:border-[var(--bs-border-color)] lg:w-1/3'>
          <div className='flex'>
            <div className='mr-3'>
              <FontAwesomeIcon icon={faServer} width={24} />
            </div>
            <div className='flex-grow'>
              <div className='text-cap mb-[1px]'>
                Transactions
              </div>
              <a href="/stat/supply" className='text-4'>
                2,394.04 M (12.3 TPS)
              </a>
            </div>
            <div className='text-right'>
              <div className='text-cap mb-[1px]'>Med Gas Price</div>
              <a href="/gastracker" className='text-4'>
                6 Gwei
                <span className='text-[14px] text-[#6c757d]'> ($0.48)</span>
              </a>
            </div>

          </div>
          <hr className='my-5 border-[var(--bs-border-color)]' />
          <LastBlock />
        </div>
        <div className='lg:w-1/3 min-[992px]:border-l min-[992px]:border-solid min-[992px]:border-[var(--bs-border-color)]'>
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