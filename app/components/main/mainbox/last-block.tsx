'use client';
import React, { useState, useEffect, useContext } from 'react';
import { Block } from 'viem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGauge } from '@fortawesome/free-solid-svg-icons';
import { EthereumContext } from '@/app/ethereum-provider';
import { EthereumContextType } from '@/app/lib/definition';

const LastBlock: React.FC = () => {
  const { client } = useContext(EthereumContext) as EthereumContextType;
  const [finalBlock, setFinalBlock] = useState<Block | null>(null);
  const [safeBlock, setSafeBlock] = useState<Block | null>(null);

  const getFinalBlock = async () => {
    let block = await client.getBlock({ blockTag: 'finalized' });
    setFinalBlock(block);
  }

  const getSafeBlock = async () => {
    let block = await client.getBlock({ blockTag: 'safe' });
    setSafeBlock(block);
  }

  useEffect(() => {
    getFinalBlock();
    getSafeBlock();
  }, []);


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
          {finalBlock?.number?.toString()}
        </a>
      </div>
      <div className='text-right'>
        <div className='text-cap mb-[1px]'>Last Safe Block</div>
        <a href="#" className='text-[15px]'>
          {safeBlock?.number?.toString()}
        </a>
      </div>
    </div>
  )
}
export default LastBlock;