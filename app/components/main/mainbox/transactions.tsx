import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faServer } from '@fortawesome/free-solid-svg-icons';

const Transactions: React.FC = () => {
  return (
    <div className='flex'>
      <div className='mr-3'>
        <FontAwesomeIcon icon={faServer} width={24} />
      </div>
      <div className='flex-grow'>
        <div className='text-cap mb-[1px]'>
          Transactions
        </div>
        <a href="#" className='text-4'>
          2,394.04 M (12.3 TPS)
        </a>
      </div>
      <div className='text-right'>
        <div className='text-cap mb-[1px]'>Med Gas Price</div>
        <a href="#" className='text-4'>
          6 Gwei
          <span className='text-[14px] text-[#6c757d]'> ($0.48)</span>
        </a>
      </div>

    </div>
  )
}

export default Transactions;
