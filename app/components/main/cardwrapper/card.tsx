'use client';

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';
import CustomizeModal from './customize-modal';
import BlockInfo from './block-info';
import TransactionInfo from './transaction-info';
import { useBlock } from 'wagmi';

const Card: React.FC<{ title: string }> = ({ title }) => {
  const { data } = useBlock();
  const [isShowModal, setIsShowModal] = useState<boolean>(false);

  return (
    <>
      <div className='card h-full text-[var(--bs-text-color)]'>
        <div className='card-header flex justify-between items-center'>
          <div className='flex justify-between items-center gap-1'>
            <h2 className=' text-sm font-[550] mb-0 '>
              {' '}
              Lastest {title === 'block' ? 'Blocks' : 'Transactions'}{' '}
            </h2>
          </div>
          <button
            className='btn btn-sm btn-white rounded-lg bg-[var(--bs-bg-color)] text-[var(--bs-text-color)] hover:bg-[var(bs-toggle-button-hover)]'
            onClick={() => setIsShowModal(true)}
          >
            <i className='fa fa-th-large mr-1 font-[400]'></i>
            Customize
          </button>
        </div>
        <div className='card-body scrollbar-custom max-h-[30.3rem]'>
          <div>
            {title === 'block' &&
              data?.number &&
              [...Array(6)].map((_, i) => (
                <React.Fragment key={i}>
                  <BlockInfo number={data.number - BigInt(i)} />
                  {i < 5 && (
                    <hr className='my-[0.875rem] border-[var(--bs-border-color)]' />
                  )}
                </React.Fragment>
              ))}
            {title === 'transaction' &&
              data &&
              [...Array(6)].map((_, i) => (
                <React.Fragment key={i}>
                  <TransactionInfo
                    number={data.transactions.length - i - 1}
                    blockNum={data.number}
                    timeStamp={data.timestamp}
                  />
                  {i < 5 && (
                    <hr className='my-[0.875rem] border-[var(--bs-border-color)]' />
                  )}
                </React.Fragment>
              ))}
          </div>
        </div>
        <a
          href='#'
          className='card-footer text-cap link-muted text-center bg-[var(--bs-bg-color)]'
        >
          View all {title === 'block' ? 'blocks' : 'Transactions'}
          <FontAwesomeIcon icon={faLongArrowAltRight} className='ml-1' />
        </a>
      </div>
      <CustomizeModal
        isShowModal={isShowModal}
        setIsShowModal={setIsShowModal}
      />
    </>
  );
};

export default Card;
