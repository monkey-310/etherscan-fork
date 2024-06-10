'use client';

import React, { useContext, useEffect, useState } from 'react';
import MainBox from './mainbox';
import Search from '../../dashboard/search';
import Card from './card';
import { EthereumContext } from '@/app/ethereum-provider';
import { BlockData, EthereumContextType } from '@/app/lib/definition';
import { Block } from 'viem';

const Main: React.FC = () => {
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
      console.log(result);
      setIsLoadingBlocks(false);
      let temp: BlockData[] = result.map((b: Block) => (
        {
          number: b?.number,
          time: Number(Math.floor(Date.now() / 1000) - Number(b.timestamp)),
          txns: b.transactions.length,
          recepient: b.miner
        } as BlockData
      ));
      setBlocks(temp);
    }).catch(err => {
      throw err;
    })
  }, []);


  return (
    <main className='flex-grow min-h-[120] bg-[var(--bs-bg-color)]'>
      <section className="bg-[var(--bs-search-section-color)] pt-14 pb-20 bg-image">
        <div className='container-xxl'>
          <div className="flex flex-wrap mt-0 justify-between items-center">
            <div className='md:w-3/4 lg:w-7/12 mb-5'>
              <h1 className="text-xl text-white font-medium mb-3">The Ethereum Blockchain Explorer</h1>
              <Search />
            </div>
          </div>
        </div>
      </section>
      <section className='container-xxl pb-20'>
        <MainBox />
        <div className='row mt-0 bg-[var(--bs-bg-color)]'>
          <div className='p-2 mb-4 lg:w-1/2'>
            <Card isLoading={isLoadingBlocks} blocks={blocks} />
          </div>
          <div className='p-2 mb-4 lg:w-1/2'>
            <Card isLoading={isLoadingBlocks} blocks={blocks} />
          </div>
        </div>
      </section>
    </main>
  )
};

export default Main;
