import React, { useContext, useState, useEffect } from 'react';
import Card from './card';
import { EthereumContext } from '@/app/ethereum-provider';
import { BlockData, EthereumContextType } from '@/app/lib/definition';
import { Block } from 'viem';

const CardWrapper: React.FC = () => {
  const { client } = useContext(EthereumContext) as EthereumContextType;
  const [blocks, setBlocks] = useState<BlockData[] | null>(null);
  const [isLoadingBlocks, setIsLoadingBlocks] = useState<boolean>(false);

  const getLatestBlocks = async () => {
    const latestBlockNumber = await client.getBlockNumber();
    const blockPromises = [];
    for (let i = 0; i < 6; i++) {
      blockPromises.push(client.getBlock({ blockNumber: latestBlockNumber - BigInt(i) }));
    }
    const blocks = await Promise.all(blockPromises);
    return blocks;
  };

  useEffect(() => {
    setIsLoadingBlocks(true);
    getLatestBlocks().then((result: Block[]) => {
      setIsLoadingBlocks(false);
      let temp: BlockData[] = [];
      result.forEach(async (b: Block) => {
        temp.push({
          number: b.number,
          time: Number(Math.floor(Date.now() / 1000) - Number(b.timestamp)),
          txns: b.transactions.length,
          recepient: b.miner
        });
        setBlocks(temp);
      });
    });
  }, []);

  return (
    <div className='row mt-0 bg-[var(--bs-bg-color)]'>
      <div className=' pr-2 mb-4 lg:w-1/2'>
        <Card isLoading={isLoadingBlocks} blocks={blocks} />
      </div>
      <div className='mb-4 lg:w-1/2 pl-2'>
        <Card isLoading={isLoadingBlocks} blocks={blocks} />
      </div>
    </div>
  )
}

export default CardWrapper;