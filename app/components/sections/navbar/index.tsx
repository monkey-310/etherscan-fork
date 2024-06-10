'use client';

import React, { useState, useContext } from 'react'
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { ThemeConext } from '@/app/theme-provider';
import { ThemeContextType } from '@/app/lib/definition';


const Navbar: React.FC = () => {

  const { theme } = useContext(ThemeConext) as ThemeContextType;
  const [navbar, setNavbar] = useState<boolean>(false);

  return (
    <header className="z-[1019] shadow-[0_0_5px_10px_rgba(151, 164, 175, 0.05)] border-b-[#e9ecef]">
      <div className="w-full bg-[var(--bs-bg-color)] border-[var(--bs-border-color)]">
        <div className="container-xxl justify-between mx-auto md:items-center md:flex relative">
          <div>
            <div className="flex items-center justify-between py-3 md:py-3 md:block">
              <a href="#">
                {theme === 'light' ?
                  <Image src="imgs/logo-etherscan.svg" width="140" height="30" alt="Etherscan Logo" />
                  :
                  <Image src="imgs/etherscan-light.svg" width="140" height="30" alt="Etherscan Logo" />
                }
              </a>
              <div className="flex items-center gap-2 text-[var(--bs-text-color)] text-sm md:hidden">
                <a href="#">
                  <FontAwesomeIcon icon={faUserCircle} className='mr-1' />
                  Sign In
                </a>
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 "
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 "
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 md:block md:pb-0 md:mt-0 ${navbar ? 'block' : 'hidden'
                }`}
            >
              <ul className="items-center justify-center md:flex md:space-x-6 md:space-y-0">
                <li className="nav-item">
                  <a
                    href="/"
                    className="nav-link min-[992px]:px-3 min-[992px]:pb-4 py-3 md:py-5 text-[var(--bs-text-color)]"
                  >
                    Home
                  </a>
                </li>
                <li className="group nav-item">
                  <a
                    href="/"
                    className="nav-link text-[var(--bs-text-color)]"
                  >
                    Blockchain{" "}
                    <i className="fa fa-angle-down ml-auto"></i>
                  </a>
                  <div className="hidden dropdown px-3 group-hover:flex group-hover:scale-100 transition-transform rounded-b-lg hover:flex md:min-w-[230px] flex-col mt-3 md:mt-0 border-[var(--bs-border-color)] bg-[var(--bs-bg-color)] md:drop-shadow-lg static md:absolute py-3 top-14 md:border-t-[3px] md:border-t-[#0784c3] md:rounded-b-lg z-10">
                    <a
                      className="text-xs px-3 py-2 text-[var(--bs-text-color)] hover:rounded-md hover:bg-[var(--bs-toggle-button-hover)]"
                      href="#!"
                    >
                      Transactions
                    </a>
                    <a
                      className="text-xs px-3 py-2 text-[var(--bs-text-color)] hover:rounded-md hover:bg-[var(--bs-toggle-button-hover)]"
                      href="#"
                    >
                      Pending Transactions
                    </a>
                    <a
                      className="text-xs px-3 py-2 text-[var(--bs-text-color)] hover:rounded-md hover:bg-[var(--bs-toggle-button-hover)]"
                      href="#"
                    >
                      Contract Internal Transactions
                    </a>
                    <div className="opacity-md"></div>
                    <a
                      className="text-xs px-3 py-2 text-[var(--bs-text-color)] hover:rounded-md hover:bg-[var(--bs-toggle-button-hover)]"
                      href="#"
                    >
                      Beacon Deposits
                    </a>
                    <a
                      className="text-xs px-3 py-2 text-[var(--bs-text-color)] hover:rounded-md hover:bg-[var(--bs-toggle-button-hover)]"
                      href="#"
                    >
                      Beacon Withdrawls
                    </a>
                    <a
                      className="text-xs  px-3 py-2 text-[var(--bs-text-color)] hover:rounded-md hover:bg-[var(--bs-toggle-button-hover)]"
                      href="#"
                    >
                      View Blobs
                    </a>
                    <a
                      className="text-xs  px-3 py-2 text-[var(--bs-text-color)] hover:rounded-md hover:bg-[var(--bs-toggle-button-hover)]"
                      href="#"
                    >
                      View Blocks
                    </a>
                    <div className="opacity-md"></div>
                    <a
                      className="text-xs  px-3 py-2 text-[var(--bs-text-color)] hover:rounded-md hover:bg-[var(--bs-toggle-button-hover)]"
                      href="#"
                    >
                      Forked Blocks(Reorgs)
                    </a>
                    <a
                      className="text-xs  px-3 py-2 text-[var(--bs-text-color)] hover:rounded-md hover:bg-[var(--bs-toggle-button-hover)]"
                      href="#"
                    >
                      Uncles
                    </a>
                    <a
                      className="text-xs  px-3 py-2 text-[var(--bs-text-color)] hover:rounded-md hover:bg-[var(--bs-toggle-button-hover)]"
                      href="#"
                    >
                      Top Accounts
                    </a>
                    <a
                      className="text-xs  px-3 py-2 text-[var(--bs-text-color)] hover:rounded-md hover:bg-[var(--bs-toggle-button-hover)]"
                      href="#"
                    >
                      Verified Accounts
                    </a>
                  </div>
                </li>
                <li className="group nav-item">
                  <a
                    href="/"
                    className="nav-link text-[var(--bs-text-color)]"
                  >
                    Tokens <i className="fa fa-angle-down ml-auto"></i>
                  </a>
                  <div className="hidden dropdown px-3 group-hover:flex group-hover:scale-100 transition-transform rounded-b-lg hover:flex md:min-w-[230px] flex-col mt-3 md:mt-0 border-[var(--bs-border-color)] bg-[var(--bs-bg-color)] md:drop-shadow-lg static md:absolute py-3 top-14 md:border-t-[3px] md:border-t-[#0784c3] md:rounded-b-lg z-10">
                    <a
                      className="text-xs px-3 py-2 text-[var(--bs-text-color)] hover:rounded-md hover:bg-[var(--bs-toggle-button-hover)]"
                      href="#"
                    >
                      ERC20 Top Tokens{' '}
                      <span className="text-[11px] text-[var(--bs-text-color)]">
                        (ERC-20)
                      </span>
                    </a>
                    <a
                      className="text-xs  px-3 py-2 text-[var(--bs-text-color)] hover:rounded-md hover:bg-[var(--bs-toggle-button-hover)]"
                      href="#"
                    >
                      View ERC20 Transfers{' '}
                      <span className="text-[11px] text-[var(--bs-text-color)]">
                        (ERC-20)
                      </span>
                    </a>
                  </div>
                </li>
                <li className="group nav-item">
                  <a
                    href="/"
                    className="nav-link text-[var(--bs-text-color)]"
                  >
                    NFT <i className="fa fa-angle-down ml-auto"></i>
                  </a>
                  <div className="hidden dropdown px-3 group-hover:flex group-hover:scale-100 transition-transform rounded-b-lg hover:flex md:min-w-[230px] flex-col mt-3 md:mt-0 border-[var(--bs-border-color)] bg-[var(--bs-bg-color)] md:drop-shadow-lg static md:absolute py-3 top-14 md:border-t-[3px] md:border-t-[#0784c3] md:rounded-b-lg z-10">
                    <a
                      className="text-xs px-3 py-2 text-[var(--bs-text-color)] hover:rounded-md hover:bg-[var(--bs-toggle-button-hover)]"
                      href="#"
                    >
                      Top NFTs
                    </a>
                    <a
                      className="text-xs  px-3 py-2 text-[var(--bs-text-color)] hover:rounded-md hover:bg-[var(--bs-toggle-button-hover)]"
                      href="#"
                    >
                      Latest Trades
                    </a>
                    <a
                      className="text-xs  px-3 py-2 text-[var(--bs-text-color)] hover:rounded-md hover:bg-[var(--bs-toggle-button-hover)]"
                      href="#"
                    >
                      Latest Transfers
                    </a>
                    <a
                      className="text-xs  px-3 py-2 text-[var(--bs-text-color)] hover:rounded-md hover:bg-[var(--bs-toggle-button-hover)]"
                      href="#"
                    >
                      Latest Mints
                    </a>
                  </div>
                </li>
                <li className="group nav-item">
                  <a
                    href="/"
                    className="nav-link text-[var(--bs-text-color)]"
                  >
                    Resources <i className="fa fa-angle-down ml-auto"></i>
                  </a>
                  <div className="hidden dropdown px-3 group-hover:flex group-hover:scale-100 transition-transform rounded-b-lg hover:flex md:min-w-[230px] flex-col mt-3 md:mt-0 border-[var(--bs-border-color)] bg-[var(--bs-bg-color)] md:drop-shadow-lg static md:absolute py-3 top-14 md:border-t-[3px] md:border-t-[#0784c3] md:rounded-b-lg z-10">
                    <a
                      className="text-xs px-3 py-2 text-[var(--bs-text-color)] hover:rounded-md hover:bg-[var(--bs-toggle-button-hover)]"
                      href="#"
                    >
                      Charts And Stats
                    </a>
                    <a
                      className="text-xs px-3 py-2 text-[var(--bs-text-color)] hover:rounded-md hover:bg-[var(--bs-toggle-button-hover)]"
                      href="#"
                    >
                      Top Statistics
                    </a>
                    <div className="opacity-md"></div>
                    <a
                      className="text-xs px-3 py-2 text-[var(--bs-text-color)] hover:rounded-md hover:bg-[var(--bs-toggle-button-hover)]"
                      href="#"
                    >
                      Directory
                    </a>
                    <a
                      className="text-xs  px-3 py-2 text-[var(--bs-text-color)] hover:rounded-md hover:bg-[var(--bs-toggle-button-hover)]"
                      href="#"
                    >
                      Newsletter
                    </a>
                    <a
                      className="text-xs  px-3 py-2 text-[var(--bs-text-color)] hover:rounded-md hover:bg-[var(--bs-toggle-button-hover)]"
                      href="#"
                    >
                      Knowledge Base
                    </a>
                  </div>
                </li>
                <li className="group nav-item">
                  <a
                    href="/"
                    className="nav-link text-[var(--bs-text-color)]"
                  >
                    Developers <i className="fa fa-angle-down ml-auto"></i>
                  </a>
                  <div className="hidden dropdown px-3 group-hover:flex group-hover:scale-100 transition-transform rounded-b-lg hover:flex md:min-w-[230px] flex-col mt-3 md:mt-0 border-[var(--bs-border-color)] bg-[var(--bs-bg-color)] md:drop-shadow-lg static md:absolute py-3 top-14 md:border-t-[3px] md:border-t-[#0784c3] md:rounded-b-lg z-10">
                    <a
                      className="text-xs px-3 py-2 text-[var(--bs-text-color)] hover:rounded-md hover:bg-[var(--bs-toggle-button-hover)]"
                      href="#"
                    >
                      API Plans
                    </a>
                    <a
                      className="text-xs px-3 py-2 text-[var(--bs-text-color)] hover:rounded-md hover:bg-[var(--bs-toggle-button-hover)]"
                      href="#"
                    >
                      API Documentation
                    </a>
                    <div className="opacity-md"></div>
                    <a
                      className="text-xs px-3 py-2 text-[var(--bs-text-color)] hover:rounded-md hover:bg-[var(--bs-toggle-button-hover)]"
                      href="#"
                    >
                      Verify Contract
                    </a>
                    <a
                      className="text-xs  px-3 py-2 text-[var(--bs-text-color)] hover:rounded-md hover:bg-[var(--bs-toggle-button-hover)]"
                      href="#"
                    >
                      Smart Contract Search
                    </a>
                    <a
                      className="text-xs  px-3 py-2 text-[var(--bs-text-color)] hover:rounded-md hover:bg-[var(--bs-toggle-button-hover)]"
                      href="#"
                    >
                      Contract Diff Checker
                    </a>
                    <div className="opacity-md"></div>
                    <a
                      className="text-xs  px-3 py-2 text-[var(--bs-text-color)] hover:rounded-md hover:bg-[var(--bs-toggle-button-hover)]"
                      href="#"
                    >
                      Vyper Online Compiler
                    </a>
                    <a
                      className="text-xs  px-3 py-2 text-[var(--bs-text-color)] hover:rounded-md hover:bg-[var(--bs-toggle-button-hover)]"
                      href="#"
                    >
                      Bytecode to Opcode
                    </a>
                    <a
                      className="text-xs  px-3 py-2 text-[var(--bs-text-color)] hover:rounded-md hover:bg-[var(--bs-toggle-button-hover)]"
                      href="#"
                    >
                      Broadcast Transaction
                    </a>
                  </div>
                </li>
                <li className="group nav-item">
                  <a
                    href="/"
                    className="nav-link text-[var(--bs-text-color)]"
                  >
                    More <i className="fa fa-angle-down ml-auto"></i>
                  </a>
                  <div className="hidden dropdown p-2 group-hover:flex rounded-b-lg w-full left-0 hover:flex w-mt-3 md:mt-0  md:min-w-[230px] flexborder border-[var(--bs-border-color)] bg-[var(--bs-bg-color)] md:drop-shadow-lg static md:absolute top-14 md:border-t-[3px] md:border-t-[#0784c3] md:rounded-b-lg z-10">
                    <div className="grid grid-cols-1 sm:grid-cols-4">
                      <div>
                        <div className="hidden sm:block bg-[var(--bs-bg-color)] h-100 rounded-lg p-5 ">
                          <div>
                            <h6 className="text-sm font-medium text-[var(--bs-text-color)] mb-3 ">
                              Tools & Services
                            </h6>
                            <p className="text-xs text-[var(--bs-text-color)] mb-3 ">
                              Discover more of Etherscan's tools and services in
                              one place.
                            </p>
                          </div>
                          <div className="mt-20	">
                            <p className="text-xs text-[var(--bs-text-color)] mb-2">
                              Sponsored
                            </p>
                            <a href="#">
                              {theme === 'light' ? (
                                <img src="imgs/etherscan-dark-logo.svg" width="100" />
                              ) : (
                                <img src="imgs/etherscan-light-logo.svg" width="100" />
                              )}
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="p-5">
                        <div className="px-3">
                          <h6 className="text-sm font-medium text-[var(--bs-text-color)] mb-3 ">
                            Tools
                          </h6>
                        </div>
                        <div className="w-full">
                          <a
                            className="text-xs px-3 py-2 text-[var(--bs-text-color)] hover:rounded-md hover:bg-[var(--bs-toggle-button-hover)] block"
                            href="#"
                          >
                            <i className="fa fa-refresh mr-2"></i>
                            Charts And Stats
                          </a>
                          <a
                            className="text-xs px-3 py-2 text-[var(--bs-text-color)] hover:rounded-md hover:bg-[var(--bs-toggle-button-hover)] block"
                            href="#"
                          >
                            <i className="fa fa-list mr-2"></i>
                            Eth2 Beacon Chain Deposits
                          </a>
                        </div>
                      </div>
                      <div className="p-5">
                        <div className="px-3">
                          <h6 className="text-sm font-medium text-[var(--bs-text-color)] mb-3">
                            Explore
                          </h6>
                        </div>
                        <div className="w-full">
                          <a
                            className="text-xs px-3 py-2 text-[var(--bs-text-color)] hover:rounded-md hover:bg-[var(--bs-toggle-button-hover)]  block"
                            href="#"
                          >
                            <i className="fa fa-bar-chart mr-2"></i>
                            Gas Tracker
                          </a>
                          <a
                            className="text-xs px-3 py-2 text-[var(--bs-text-color)] hover:rounded-md hover:bg-[var(--bs-toggle-button-hover)]  block"
                            href="#"
                          >
                            <i className="fa fa-exchange mr-2"></i>
                            DEX Tracker
                          </a>
                          <a
                            className="text-xs px-3 py-2 text-[var(--bs-text-color)] hover:rounded-md hover:bg-[var(--bs-toggle-button-hover)]  block"
                            href="#"
                          >
                            <i className="fa fa-server mr-2"></i>
                            Node Tracker
                          </a>
                          <a
                            className="text-xs px-3 py-2 text-[var(--bs-text-color)] hover:rounded-md hover:bg-[var(--bs-toggle-button-hover)]  block"
                            href="#"
                          >
                            <i className="fa fa-map-signs mr-2"></i>
                            Label Cloud
                          </a>
                          <a
                            className="text-xs px-3 py-2 text-[var(--bs-text-color)] hover:rounded-md hover:bg-[var(--bs-toggle-button-hover)]  block"
                            href="#"
                          >
                            <i className="fa fa-search-plus mr-2"></i>
                            ENS Lookup
                          </a>
                        </div>
                      </div>
                      <div className="p-5">
                        <div className="px-3">
                          <h6 className="text-sm font-medium text-[var(--bs-text-color)] mb-3 dark:text-[#f5f5f5]">
                            Services
                          </h6>
                        </div>
                        <div className="w-full">
                          <a
                            className="text-xs px-3 py-2 text-[var(--bs-text-color)] hover:rounded-md hover:bg-[var(--bs-toggle-button-hover)]  block"
                            href="#"
                          >
                            <i className="fa fa-key mr-2"></i>
                            Token Approvals
                          </a>
                          <a
                            className="text-xs px-3 py-2 text-[var(--bs-text-color)] hover:rounded-md hover:bg-[var(--bs-toggle-button-hover)]  block"
                            href="#"
                          >
                            <i className="fa fa-american-sign-language-interpreting mr-2"></i>
                            Verified Signature
                          </a>
                          <a
                            className="text-xs px-3 py-2 text-[var(--bs-text-color)] hover:rounded-md hover:bg-[var(--bs-toggle-button-hover)]  block"
                            href="#"
                          >
                            <i className="fa fa-weixin mr-2"></i>
                            Blockscan Chat
                          </a>
                        </div>
                      </div>
                      <div>
                        <div className="bg-[#f8f9fa] h-100 rounded-lg p-5 dark:bg-[#151515] sm:hidden">
                          <div>
                            <h6 className="text-sm font-medium text-[var(--bs-text-color)] mb-3 dark:text-[#f5f5f5]">
                              Tools & Services
                            </h6>
                            <p className="text-xs text-[var(--bs-text-color)] mb-3 dark:text-[#f5f5f5]">
                              Discover more of Etherscan's tools and services in
                              one place.
                            </p>
                          </div>
                          <div className="mt-5">
                            <p className="text-xs text-[var(--bs-text-color)] mb-2">
                              Sponsored
                            </p>
                            <a href="#">
                              {theme === 'light' ? (
                                <img src="imgs/etherscan-dark-logo.svg" width="100" />
                              ) : (
                                <img src="imgs/etherscan-light-logo.svg" width="100" />
                              )}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="group nav-item">
                  <a
                    href="/"
                    className="nav-link md:hidden text-[var(--bs-text-color)]"
                  >
                    Appearance & Settings{' '}
                    <i className="fa fa-angle-down ml-auto"></i>
                  </a>
                  <div className="hidden dropdown px-3 group-hover:flex group-hover:scale-100 transition-transform rounded-b-lg hover:flex md:min-w-[230px] flex-col mt-3 md:mt-0 border-[var(--bs-border-color)] bg-[var(--bs-bg-color)] md:drop-shadow-lg static md:absolute py-3 top-14 md:border-t-[3px] -t md:rounded-b-lg z-10 dark:bg-gray-700 dark:divide-gray-600">
                    <a
                      href="#!"
                      className="text-xs px-3 py-2 text-[var(--bs-text-color)] hover:rounded-md hover:bg-[var(--bs-toggle-button-hover)] "
                    >
                      <i className="fa fa-sun-o mr-2"></i>
                      Light
                    </a>
                    <a
                      href="#!"
                      className="text-xs px-3 py-2 text-[var(--bs-text-color)] hover:rounded-md hover:bg-[var(--bs-toggle-button-hover)]"
                    >
                      <i className="fa fa-moon-o mr-2"></i>
                      Dark
                    </a>
                    <div className="opacity-md"></div>
                    <a
                      href="#"
                      className="text-xs px-3 py-2 text-[var(--bs-text-color)] hover:rounded-md hover:bg-[var(--bs-toggle-button-hover)]"
                    >
                      <i className="fa fa-cog mr-2"></i>
                      Site Settings
                      <i className="fa fa-arrow-right ml-2"></i>
                    </a>
                  </div>
                </li>
                <li className="hidden text-gray-300 self-center min-[992px]:block" style={{ marginLeft: '0px' }}>
                  <span>|</span>
                </li>
                <li className="nav-item hidden md:block text-[var(--bs-text-color)]">
                  <a href="#" className='nav-link'>
                    <FontAwesomeIcon icon={faUserCircle} className='mr-2' />
                    Sign In
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar;
