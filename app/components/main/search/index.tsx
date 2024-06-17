import React from 'react';
import SearchForm from './search-form';

const Search = () => {
  return (
    <section className='bg-[var(--bs-search-section-color)] pt-14 pb-20 bg-image'>
      <div className='container-xxl'>
        <div className='flex flex-wrap mt-0 justify-between items-center'>
          <div className='md:w-3/4 lg:w-7/12 mb-5'>
            <h1 className='text-xl text-white font-medium mb-3'>
              The Ethereum Blockchain Explorer
            </h1>
            <SearchForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Search;
