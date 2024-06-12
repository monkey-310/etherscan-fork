import React, { useContext, useEffect, useState } from 'react'
import { EthereumContext } from '@/app/ethereum-provider';
import { EthereumContextType, TransactionData } from '@/app/lib/definition';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileLines } from '@fortawesome/free-solid-svg-icons';
import { Transaction, Block } from 'viem';

const TransactionInfo: React.FC<{ number: number, block: Block }> = ({ number, block }) => {
  const { client } = useContext(EthereumContext) as EthereumContextType;
  const [txn, setTxn] = useState<TransactionData | null>(null);

  const getTransactionInfo: () => {} = async () => {
    if (block.number) {
      let tnx: Transaction = await client.getTransaction({
        blockNumber: block.number,
        index: number
      });
      let temp: number = 0;
      if (tnx.gasPrice) {
        temp = Number(tnx.gas * tnx.gasPrice) / 1e18;
      }
      setTxn({
        hash: `${tnx.hash.slice(0, 12)}...`,
        from: `${tnx.from.toString().slice(0, 10)}...${tnx.from.slice(-8)}`,
        to: `${tnx.to?.toString().slice(0, 10)}...${tnx.to?.slice(-8)}`,
        time: Number(Math.ceil(Date.now() / 1000) - Number(block.timestamp)),
        amount: temp
      });
    } else {
      alert("Some issue occurs on getting block info");
    }
  }

  useEffect(() => {
    getTransactionInfo();
  }, []);

  return (
    <div className='row'>
      <div className='sm:w-1/3'>
        <div className='flex items-center gap-2'>
          <div className='w-12 h-12 items-center justify-center rounded-lg sm:flex hidden text-muted p-3 bg-[var(--bs-bg-icon-card)]'>
            <FontAwesomeIcon icon={faFileLines} />
          </div>
          <div className='flex flex-row sm:flex-col sm:items-start sm:gap-0 items-center gap-1'>
            <span className='inline-block sm:hidden'>Block</span>
            <a href="#" className='max-w-24 truncate text-[#0783c4] text-sm'>
              {txn?.hash ? txn.hash : ""}
            </a>
            <div className='text-xs text-muted'>
              {txn?.time.toString()}
              secs ago
            </div>
          </div>
        </div>
      </div>
      <div className='items-end flex relative sm:w-2/3 sm:items-center sm:justify-between'>
        <div className='pr-0 sm:pr-2'>
          <div className='flex flex-wrap gap-1 text-sm'>
            From
            <a href="#" className='text-[#0783c4]'>
              <span>{txn?.from}</span>
            </a>
          </div>
          <div className='flex flex-wrap gap-1 text-sm'>
            To
            <a href="#" className='text-[#0783c4]'>
              <span>{txn?.to}</span>
            </a>
          </div>
        </div>
        <div className='hidden sm:block sm:ml-0 text-end ml-2'>
          <span className='border border-solid border-[var(--bs-border-color)] px-[8px] py-[5px] text-[11px] rounded-md font-medium'>
            0
            {txn?.amount !== undefined && txn?.amount > 0 ? `.${txn?.amount.toString().split(".")[1].slice(0, 5)}` : ""}
            Eth
          </span>
        </div>
      </div>
    </div>
  )
}

export default TransactionInfo;