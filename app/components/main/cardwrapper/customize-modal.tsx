'use client';

import React from 'react';
import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const CustomizeModal: React.FC<{ isShowModal: boolean, setIsShowModal: (isShowModal: boolean) => void }> = ({ isShowModal, setIsShowModal }) => {

  const handleCloseClick = (e: any) => {
    e.preventDefault();
    setIsShowModal(false);
  };

  return (
    <div className={clsx('z-[1400] modal-overlay ', isShowModal ? "block" : "hidden")}>
      <div className="modal-wrapper mx-auto my-8 ">
        <div className="modal bg-[var(--bs-bg-color)] text-[var(--bs-text-color)]">
          <div className="modal-header border-b border-b-[var(--bs-border-color)]">
            <div className='w-full flex justify-between m-4'>
              <h4>Custom Card</h4>
              <a href="#" className='hover:bg-[var(--bs-toggle-button-hover)] py-1 px-2 rounded-md' onClick={handleCloseClick}>
                <FontAwesomeIcon icon={faXmark} />
              </a>
            </div>
          </div>
          <div id="modal-body" className="m-3">
            <p className="my-2 bg-[var(--bs-bg-color)] text-sm text-[var(--bs-text-color)]">
              Customize this card by selecting one of the options below.
            </p>
            <p className="my-2 bg-[var(--bs-bg-color)] text-sm text-[var(--bs-text-color)]">
              ADVANCED FILTER
            </p>
            <label className="max-w-[150px] flex p-1 border border-[var(--bs-border-color)] rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500  dark:border-neutral-700">
              <input type="radio" className="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" disabled />
              <span className="text-sm text-gray-500 ms-3 dark:text-neutral-400">Saved Filters</span>
            </label>
            <p className="my-2 bg-[var(--bs-bg-color)] text-sm text-[var(--bs-text-color)]">
              PRESET
            </p>
            <div className="flex gap-x-4">
              <div className="flex border border-solid border-[var(--bs-border-color)] rounded-lg p-1">
                <input type="radio" name="hs-radio-group" className="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" id="hs-radio-group-1" />
                <label className="text-sm text-gray-500 ms-2 dark:text-neutral-400">Latest Blocks</label>
              </div>

              <div className="flex border border-solid border-[var(--bs-border-color)] rounded-lg p-1">
                <input type="radio" name="hs-radio-group" className="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" id="hs-radio-group-2" />
                <label className="text-sm text-gray-500 ms-2 dark:text-neutral-400">Latest Transcations</label>
              </div>
              <div className="flex border border-solid border-[var(--bs-border-color)] rounded-lg p-1">
                <input type="radio" name="hs-radio-group" className="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" id="hs-radio-group-3" />
                <label className="text-sm text-gray-500 ms-2 dark:text-neutral-400">Hot Contracts</label>
              </div>
            </div>
            <div className="flex w-[150px] border border-solid border-[var(--bs-border-color)] rounded-lg p-1 mt-3">
              <input type="radio" name="hs-radio-group" className="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" id="hs-radio-group-3" />
              <label className="text-sm text-gray-500 ms-2 dark:text-neutral-400">Hot Contracts</label>
            </div>
          </div>
          <div id="modal-footer" className='flex w-full justify-end border-t border-t-[var(--bs-border-color)] p-3 gap-2'>
            <button className='hover:bg-[var(--bs-border-color)] p-2 rounded-lg' onClick={() => setIsShowModal(false)}>Close</button>
            <button className='bg-[#0784c3] text-white p-2 rounded-lg' onClick={() => setIsShowModal(false)}>
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CustomizeModal;