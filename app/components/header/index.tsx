"use client";
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGasPump } from '@fortawesome/free-solid-svg-icons';
import ThemeToggle from './theme-toggle';
import MainnetToggle from './mainnet-toggle';

const Header: React.FC = () => {

  return (
    <section className="hidden min-[992px]:block sticky top-0 z-[1020] border-b border-solid border-b-[var(--bs-border-color)] bg-[var(--bs-bg-color)] py-1">
      <div className='container-xxl flex items-center justify-between'>
        <div className="flex sm:items-center gap-4 w-100 text-[0.785rem]">
          <div className='text-muted'>
            <span className="text-muted">
              ETH Price:
            </span>
            <a href="/chart/etherprice" className="text-[#0784c3]">
              {" "}$3804.31
            </a>
            <span>
              <span className="text-success">(+0.89%)</span>
            </span>
          </div>
          <div className='text-muted'>
            <FontAwesomeIcon icon={faGasPump} />{" Gas: "}
            <span>
              <a href="/gastracker" className="text-[#0784c3]">
                <span>19</span>
                {" Gwei"}
              </a>
            </span>
          </div>
        </div>
        <div className="flex items-center justify-end gap-2">
          <ThemeToggle />
          <MainnetToggle />
        </div>
      </div>
    </section>
  )
}

export default Header;
