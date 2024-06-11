'use client';

import React from 'react';

const SearchForm: React.FC = () => {
  return (
    <form action="/search" className="mb-3" method="get">
      <div className="flex gap-2 p-1.5 m-0 border rounded-lg bg-[var(--bs-bg-color)] border-[var(--bs-border-color)]">
        <select className="hidden sm:block form-select text-sm border-transparent focus:border-transparent focus:ring-0 focus:rounded-lg  bg-[var(--bs-bg-color)] text-[var(--bs-text-color)] mr-2"
        >
          <option value="0">All Filters</option>
          <option value="1">Addresses</option>
          <option value="2">Tokens</option>
          <option value="3">Name Tags</option>
          <option value="4">Labels</option>
          <option value="5">Websites</option>
        </select>
        <div className='grow'>
          <input
            type="text"
            placeholder="Search by Address / Txn Hash / Block / Token / Domain Name"
            className="text-sm py-1.5 border-transparent focus:border-[var(--bs-border-color)] focus:ring-0 focus:rounded-lg w-full mr-2 text-[var(--bs-text-color)] bg-[var(--bs-bg-color)]"
          />
        </div>
        <div>
          <button
            type="submit"
            className="form-input text-white py-1.5 px-2.5 text-sm rounded-lg bg-[#3498db] border-[#3498db] hover:bg-[#0670a6] hover:border-[#0670a6]"
          >
            <i className="fa fa-search" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    </form>
  );
};

export default SearchForm;