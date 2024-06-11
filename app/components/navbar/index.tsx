'use client';

import React, { useState, useContext } from 'react'
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { ThemeConext } from '@/app/theme-provider';
import { ThemeContextType } from '@/app/lib/definition';
import { navbarData, navMoreData } from '@/app/lib/data';


const Navbar: React.FC = () => {

  const { theme } = useContext(ThemeConext) as ThemeContextType;
  const [navbar, setNavbar] = useState<boolean>(false);

  return (
    <header className="z-[1019] shadow-[0_0_5px_10px_rgba(151, 164, 175, 0.05)] border-b-[#e9ecef]">
      <div className="w-full bg-[var(--bs-bg-color)] border-[var(--bs-border-color)]">
        <div className="container-xxl justify-between mx-auto md:items-center md:flex relative">
          <div>
            <div className="flex items-center justify-between py-2 md:py-2 md:block">
              <a href="/">
                {theme === 'light' ?
                  <Image src="imgs/logo-etherscan.svg" width="150" height="30" alt="Etherscan Logo" />
                  :
                  <Image src="imgs/etherscan-light.svg" width="150" height="30" alt="Etherscan Logo" />
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
                    href="#"
                    className="nav-link min-[992px]:px-3 min-[992px]:pb-4 py-3 md:py-5 text-[var(--bs-text-color)]"
                  >
                    Home
                  </a>
                </li>
                {navbarData.map((data, i) => (
                  <li className="group nav-item" key={i}>
                    <a
                      href="#"
                      className="nav-link text-[var(--bs-text-color)]"
                      key={i}
                    >
                      {data.label}
                      <i className="fa fa-angle-down ml-1.5"></i>
                    </a>
                    <div className="hidden dropdown px-3 group-hover:flex group-hover:scale-100 transition-transform rounded-b-lg hover:flex md:min-w-[230px] flex-col mt-3 md:mt-0 border-[var(--bs-border-color)] bg-[var(--bs-bg-color)] md:drop-shadow-lg static md:absolute py-3 top-12 md:border-t-[3px] md:border-t-[#0784c3] md:rounded-b-lg z-10">
                      {data.data.map((sub, i) => (
                        sub.label ?
                          <a
                            href="#"
                            className="text-xs px-3 py-2 text-[var(--bs-text-color)] hover:rounded-md hover:bg-[var(--bs-toggle-button-hover)]"
                            key={i}
                          >
                            {sub.label}
                            {sub.subLabel && <span className="text-[11px] text-[var(--bs-text-color)] text-gray-400"> {`(${sub.subLabel})`} </span>}
                            {sub.badge && (
                              <span className="text-[var(--bs-text-color)] text-[9px] ml-2 px-2 py-0.5 rounded-md bg-[var(--bs-bg-icon-card)] border border-solid border-[var(--bs-border-color)] font-bold">
                                Beta
                              </span>
                            )}
                          </a> :
                          <hr key={i} className="my-2 border-[var(--bs-border-color)]"></hr>
                      ))}
                    </div>
                  </li>
                ))}
                <li className="group nav-item">
                  <a
                    href="#"
                    className="nav-link text-[var(--bs-text-color)]"
                  >
                    More <i className="fa fa-angle-down ml-1.5"></i>
                  </a>
                  <div className="hidden dropdown p-2 group-hover:flex rounded-b-lg w-full left-0 hover:flex w-mt-3 md:mt-0  md:min-w-[230px] flexborder border-[var(--bs-border-color)] bg-[var(--bs-bg-color)] md:drop-shadow-lg static md:absolute top-12 md:border-t-[3px] md:border-t-[#0784c3] md:rounded-b-lg z-10">
                    <div className="grid grid-cols-1 sm:grid-cols-4">
                      <div className='rounded-lg bg-[var(--bs-bg-footer)]'>
                        <div className="hidden sm:block h-100 p-5 ">
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
                      {navMoreData.map((data, i) => (
                        <div className="p-5" key={i}>
                          <div className="px-3">
                            <h6 className="text-sm font-medium text-[var(--bs-text-color)] mb-3 ">
                              {data.label}
                            </h6>
                          </div>
                          <div className="w-full">
                            {data.data.map((sub, i) => (
                              <a
                                key={i}
                                href="#"
                                className="text-xs px-3 py-2 text-[var(--bs-text-color)] hover:rounded-md hover:bg-[var(--bs-toggle-button-hover)] block"
                              >
                                {sub.icon && <FontAwesomeIcon icon={sub.icon} className='mr-2' />}
                                {sub.label}
                                {sub.badge && <span className="text-[var(--bs-text-color)] text-[9px] ml-2 px-2 py-0.5 rounded-md bg-[var(--bs-bg-icon-card)] border border-solid border-[var(--bs-border-color)] font-bold">
                                  {sub.badge}
                                </span>}
                              </a>
                            ))}
                          </div>
                        </div>
                      ))}
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
                  <div className="hidden dropdown px-3 group-hover:flex group-hover:scale-100 transition-transform rounded-b-lg hover:flex md:min-w-[230px] flex-col mt-3 md:mt-0 border-[var(--bs-border-color)] bg-[var(--bs-bg-color)] md:drop-shadow-lg static md:absolute py-3 top-12 md:border-t-[3px] -t md:rounded-b-lg z-10 dark:bg-gray-700 dark:divide-gray-600">
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
