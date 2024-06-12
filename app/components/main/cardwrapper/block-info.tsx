import React, { useContext, useEffect, useState } from 'react';
import { EthereumContext } from '@/app/ethereum-provider';
import { BlockData, EthereumContextType } from '@/app/lib/definition';
import { Block } from 'viem';

function BlockInfo({ number }: { number: bigint }) {
  const { client } = useContext(EthereumContext) as EthereumContextType;
  const [block, setBlock] = useState<BlockData | null>(null);

  const getBlockInfo: () => {} = async () => {
    let tempBlock: Block = await client.getBlock({ blockNumber: number });
    let ensName: string | null = await client.getEnsName({ address: tempBlock.miner });
    let temp: string = tempBlock.miner.toString();
    setBlock({
      number,
      time: Number(Math.floor(Date.now() / 1000) - Number(tempBlock.timestamp)),
      txns: tempBlock.transactions.length,
      recepient: ensName ? ensName.split(".")[0] : `${temp.toString().slice(0, 10)}...${temp.slice(-8)}`
    });
  }

  useEffect(() => {
    getBlockInfo();
  }, []);

  return (
    <div className='row'>
      <div className='sm:w-1/3'>
        <div className='flex items-center gap-2'>
          <div className='w-12 h-12 items-center justify-center rounded-lg sm:flex hidden text-muted p-3 bg-[var(--bs-bg-icon-card)]'>
            <i className='fa fa-cube'></i>
          </div>
          <div className='flex flex-row sm:flex-col sm:items-start sm:gap-0 items-center gap-1'>
            <span className='inline-block sm:hidden'>Block</span>
            <a href="#" className='max-w-24 truncate text-[#0783c4] text-sm'>{block?.number?.toString()}</a>
            <div className='text-xs text-muted'>
              {block?.time !== undefined ? block?.time > 60 ? "1 min ago" : `${block?.time} secs ago` : ""}
            </div>
          </div>
        </div>
      </div>
      <div className='items-end flex relative sm:w-2/3 sm:items-center sm:justify-between'>
        <div className='pr-0 sm:pr-2'>
          <div className='flex flex-wrap gap-1 text-sm'>
            Fee Recipient
            <a href="#" className='text-[#0783c4]'>
              <span>{block?.recepient}</span>
            </a>
          </div>
          <a href="#" className='text-[#0783c4] text-sm'>{block?.txns} txns</a>
          <span className='text-xs text-muted mx-2'>in 12 secs</span>
        </div>
        <div className='hidden sm:block sm:ml-0 text-end ml-2'>
          <span className='border border-solid border-[var(--bs-border-color)] px-[8px] py-[5px] text-[11px] rounded-md font-medium'>
            0
            <b>.</b>
            0173 Eth
          </span>
        </div>
      </div>
    </div>
  )
}

export default BlockInfo;
