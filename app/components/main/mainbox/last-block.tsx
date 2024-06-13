'use client';
import React, { useState, useEffect, useContext } from 'react';
import { useBlock } from 'wagmi';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGauge } from '@fortawesome/free-solid-svg-icons';

const LastBlock: React.FC = () => {
  const finalizedBlock = useBlock({ blockTag: "finalized" });
  const safeBlock = useBlock({ blockTag: "safe" });

  return (
    <div className='flex'>
      <div className='mr-3'>
        <FontAwesomeIcon icon={faGauge} width={24} />
      </div>
      <div className='flex-grow'>
        <div className='text-cap mb-[1px]'>
          Last Finalized Block
        </div>
        <a href="#" className='text-[15px]'>
          {finalizedBlock.data?.number?.toString()}
        </a>
      </div>
      <div className='text-right'>
        <div className='text-cap mb-[1px]'>Last Safe Block</div>
        <a href="#" className='text-[15px]'>
          {safeBlock.data?.number?.toString()}
        </a>
      </div>
    </div>
  )
}
export default LastBlock;