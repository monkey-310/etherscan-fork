"use client";

import React, { useEffect, useContext } from 'react';
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon, faStarAndCrescent, faGasPump } from '@fortawesome/free-solid-svg-icons';
import { ThemeConext } from "@/app/theme-provider";
import { ThemeContextType } from '@/app/lib/definition';

const Header: React.FC = () => {

  const { theme, setTheme } = useContext(ThemeConext) as ThemeContextType;

  useEffect(() => {
    if (typeof window !== 'undefined' && (window as any).Flowbite) {
      (window as any).Flowbite();
    }
  }, []);

  return (
    <section className="d-none d-lg-block sticky top-0 z-[1020] border-bottom border-b-[var(--bs-border-color)] bg-[var(--bs-bg-color)] py-1">
      <div className='container-xxl flex items-center justify-between'>
        <div id="ethPrice" className="flex align-items-sm-center gap-4 w-100 fs-sm">
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
        <div id="divTestNet" className="flex items-center justify-end gap-2">
          <div className='my-2'>
            <span className="text-sm text-[#066a9c]">
              <a
                href="#"
                id="darkMode"
                data-dropdown-toggle="darkModeToggle"
                data-dropdown-placement="left"
                data-dropdown-offset-distance="-39"
                data-dropdown-offset-skidding="105"
                className="p-[10px] px-[11px] border border-solid border-[var(--bs-border-color)] rounded-md hover:bg-[var(--bs-toggle-button-hover)]"
              >
                {theme === 'light' ? <FontAwesomeIcon icon={faSun} /> : theme === 'dark' ? <FontAwesomeIcon icon={faMoon} /> : <FontAwesomeIcon icon={faStarAndCrescent} />}
              </a>
            </span>
            <div
              id="darkModeToggle"
              className="z-[1000] bg-[var(--bs-bg-color)] border border-solid border-[var(--bs-border-color)] hidden divide-y p-2 divide-gray-300 rounded-lg shadow w-44"
            >
              <ul
                className="py-2 text-sm text-[var(--bs-text-color)]"
                aria-labelledby="darkMode"
              >
                <li>
                  <a
                    href="#!"
                    className="block px-4 py-2 text-xs hover:rounded-md hover:bg-[var(--bs-toggle-button-hover)] active:text-[#0784c3] focus:text-[#0784c3]"
                    onClick={() => setTheme("light")}
                  >
                    <FontAwesomeIcon icon={faSun} className='mr-2' />
                    Light
                  </a>
                </li>
                <li>
                  <a
                    href="#!"
                    className="block px-4 py-2 text-xs hover:rounded-md hover:bg-[var(--bs-toggle-button-hover)] active:text-[#0784c3] focus:text-[#0784c3]"
                    onClick={() => setTheme("dim")}
                  >
                    <FontAwesomeIcon icon={faStarAndCrescent} className='mr-2' />
                    Dim
                  </a>
                </li>
                <li>
                  <a
                    href="#!"
                    className="block px-4 py-2 text-xs hover:rounded-md hover:bg-[var(--bs-toggle-button-hover)] active:text-[#0784c3] focus:text-[#0784c3]"
                    onClick={() => setTheme("dark")}
                  >
                    <FontAwesomeIcon icon={faMoon} className='mr-2' />
                    {" Dark"}
                  </a>
                </li>
              </ul>
              <div className="py-1">
                <a
                  href="#"
                  className="block px-4 py-2 text-xs text-[var(--bs-text-color)] hover:rounded-md hover:bg-[var(--bs-toggle-button-hover)] active:text-[#0784c3] focus:text-[#0784c3]"
                >
                  <i className="fa fa-cog mr-2"></i>
                  Site Settings
                  <i className="fa fa-arrow-right ml-2"></i>
                </a>
              </div>
            </div>
          </div>
          <div className='my-2'>
            <span className="text-sm text-gray-400">
              <a
                href="#"
                id="etherMainnet"
                data-dropdown-toggle="etherMainnetToggle"
                data-dropdown-placement="left"
                data-dropdown-offset-distance="-37"
                data-dropdown-offset-skidding="125"
                className="py-[10px] px-[12px] border border-solid border-[var(--bs-border-color)] hover:bg-[var(--bs-toggle-button-hover)] rounded-md"
              >
                {theme === 'light' ? (
                  <Image src="imgs/ethereum-dark.svg" className="inline" width={10} height={10} alt="Ethererum Logo" />
                ) : (<Image src="imgs/ethereum-light.svg" className="inline" width={10} height={10} alt="Ethererum Logo" />)
                }
              </a>
            </span>
            <div
              id="etherMainnetToggle"
              className="z-[1000] hidden bg-[var(--bs-bg-color)] border border-solid border-[var(--bs-border-color)] divide-y p-2 divide-gray-300 rounded-lg shadow w-50"
            >
              <ul
                className="py-2 text-sm text-[var(--bs-text-color)]"
                aria-labelledby="etherMainnet"
              >
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-xs hover:rounded-md hover:bg-[var(--bs-toggle-button-hover)] active:text-[#0784c3] focus:text-[#0784c3]"
                  >
                    Ethereum Mainnet
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-xs hover:rounded-md hover:bg-[var(--bs-toggle-button-hover)] active:text-[#0784c3] focus:text-[#0784c3]"
                  >
                    Ethereum Mainnet
                    <span className="bg-gray-100 text-black text-[9px] ml-2 px-2 py-0.5 rounded-md dark:bg-gray-700 dark:text-gray-400 border border-[#e9ecef] font-bold">
                      CN
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-xs hover:rounded-md hover:bg-[var(--bs-toggle-button-hover)] active:text-[#0784c3] focus:text-[#0784c3]"
                  >
                    Beaconscan
                    <span className="bg-gray-100 text-black text-[9px] ml-2 px-2 py-0.5 rounded-md dark:bg-gray-700 dark:text-gray-400 border border-[#e9ecef] font-bold">
                      ETH2
                    </span>
                  </a>
                </li>
              </ul>
              <div className="py-1 text-[var(--bs-text-color)]">
                <a
                  href="#"
                  className="block px-4 py-2 text-xs hover:rounded-md hover:bg-[var(--bs-toggle-button-hover)] active:text-[#0784c3] focus:text-[#0784c3]"
                >
                  Goerli Testnet
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-xs hover:rounded-md hover:bg-[var(--bs-toggle-button-hover)] active:text-[#0784c3] focus:text-[#0784c3]"
                >
                  Sepolia Testnet
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Header;
