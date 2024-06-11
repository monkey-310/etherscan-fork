'use client';

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';
import CustomizeModal from './customize-modal';
import { BlockData } from '@/app/lib/definition';

function Card({ isLoading, blocks }: { isLoading: boolean, blocks: BlockData[] | null }) {
  const [isShowModal, setIsShowModal] = useState<boolean>(false);

  const spinner = (
    <div className='relative items-center block w-full min-h-[25rem]'>
      <div role="status" className='absolute -translate-x-1/2 -translate-y-1/2 top-2/4 left-1/2'>
        <svg aria-hidden="true" className="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
          <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
        </svg>
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );

  return (
    <>
      <div className='card h-full text-[var(--bs-text-color)]'>
        <div className='card-header flex justify-between items-center'>
          <div className='flex justify-between items-center gap-1'>
            <h2 className='text-4 mb-0'> Lastest Blocks </h2>
            <button>
            </button>
          </div>
          <button
            className='btn btn-sm btn-white rounded-lg bg-[var(--bs-bg-color)] text-[var(--bs-text-color)] hover:bg-[var(bs-toggle-button-hover)]'
            onClick={() => setIsShowModal(true)}
          >
            <i className='fa fa-th-large mr-1 font-[400]'></i>
            Customize
          </button>
        </div>
        <div className='card-body overflow-auto scrollbar-custom max-h-[30.3rem]'>
          {isLoading || !blocks ? spinner : blocks.map((block, i) => (
            <div key={i}>
              <div className='row'>
                <div className='sm:w-1/3'>
                  <div className='flex items-center gap-2'>
                    <div className='w-12 h-12 items-center justify-center rounded-lg sm:flex hidden text-muted p-3 bg-[var(--bs-bg-icon-card)]'>
                      <i className='fa fa-cube'></i>
                    </div>
                    <div className='flex flex-row sm:flex-col sm:items-start sm:gap-0 items-center gap-1'>
                      <span className='inline-block sm:hidden'>Block</span>
                      <a href="#" className='max-w-24 truncate text-[#0783c4]'>{block.number?.toString()}</a>
                      <div className='text-sm text-muted'>
                        {block.time > 60 ? "1 min ago" : `${block.time} secs ago`}
                      </div>
                    </div>
                  </div>
                </div>
                <div className='items-end flex relative sm:w-2/3 sm:items-center sm:justify-between'>
                  <div className='pr-0 sm:pr-2'>
                    <div className='flex flex-wrap gap-1'>
                      Fee Recipient
                      <a href="/" className='text-[#0783c4]'>
                        <span></span>
                      </a>
                    </div>
                    <a href="" className='text-[#0783c4]'>{block.txns} txns</a>
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
              {i < 5 && <hr className='my-[0.875rem] border-[var(--bs-border-color)]' />}
            </div>
          ))}
        </div>
        <a href="/allblocks" className='card-footer text-cap link-muted text-center bg-[var(--bs-bg-color)]'>
          View all blocks
          <FontAwesomeIcon icon={faLongArrowAltRight} className='ml-1' />
        </a>
      </div>
      <CustomizeModal isShowModal={isShowModal} setIsShowModal={setIsShowModal} />
    </>
  )
}

export default Card;