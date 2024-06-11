'use client';

import React, { useContext } from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { ThemeConext } from "@/app/theme-provider";
import { ThemeContextType } from '@/app/lib/definition';


const Footer: React.FC = () => {

  const { theme } = useContext(ThemeConext) as ThemeContextType;

  const handleBackTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <footer className='bg-[var(--bs-bg-footer)] mt-auto text-[var(--bs-text-color)]'>
      <div className='container-xxl'>
        <div className="flex justify-between lg:w-full md:items-center md:flex py-6">
          <div className="flex justify-between w-full">
            <div>
              <ul className="items-center justify-center md:flex space-x-2 md:space-y-0 inline-flex">
                <li>
                  <a
                    href="#"
                    className="p-2 rounded-full bg-[var(--bs-toggle-button-hover)] text-sm "
                    data-tooltip-target="twitter"
                    data-tooltip-placement="top"
                  >
                    <i className="fa fa-twitter"></i>
                  </a>
                  <div
                    id="twitter"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block py-1 px-2 text-xs font-medium text-white transition-opacity duration-300 bg-[#111b36] rounded-md shadow-sm opacity-0 tooltip dark:bg-[#333]"
                  >
                    Twitter
                    <div className="tooltip-arrow" data-popper-arrow></div>
                  </div>
                </li>
                <li>
                  <a
                    href="#"
                    className="p-2 rounded-full bg-[var(--bs-toggle-button-hover)] text-sm"
                    data-tooltip-target="facebook"
                    data-tooltip-placement="top"
                  >
                    <i className="fa fa-facebook-official"></i>
                  </a>
                  <div
                    id="facebook"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block py-1 px-2 text-xs font-medium text-white transition-opacity duration-300 bg-[#111b36] rounded-md shadow-sm opacity-0 tooltip dark:bg-[#333]"
                  >
                    Facebook
                    <div className="tooltip-arrow" data-popper-arrow></div>
                  </div>
                </li>
                <li>
                  <a
                    href="#"
                    className="p-2 rounded-full bg-[var(--bs-toggle-button-hover)] text-sm"
                    data-tooltip-target="reddit"
                    data-tooltip-placement="top"
                  >
                    <i className="fa fa-reddit-alien"></i>
                  </a>
                  <div
                    id="reddit"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block py-1 px-2 text-xs font-medium text-white transition-opacity duration-300 bg-[#111b36] rounded-md shadow-sm opacity-0 tooltip dark:bg-[#333]"
                  >
                    Reddit
                    <div className="tooltip-arrow" data-popper-arrow></div>
                  </div>
                </li>
                <li>
                  <a
                    href="#"
                    className="p-2 rounded-full bg-[var(--bs-toggle-button-hover)] text-sm"
                    data-tooltip-target="medium"
                    data-tooltip-placement="top"
                  >
                    <i className="fa fa-medium"></i>
                  </a>
                  <div
                    id="medium"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block py-1 px-2 text-xs font-medium text-white transition-opacity duration-300 bg-[#111b36] rounded-md shadow-sm opacity-0 tooltip dark:bg-[#333]"
                  >
                    Medium
                    <div className="tooltip-arrow" data-popper-arrow></div>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-[var(--bs-text-color)] hover:text-[#066a9c] text-sm cursor-pointer" onClick={handleBackTop}>
                <i className="fa fa-arrow-up" aria-hidden="true"></i>
                <span className="ml-1">
                  Back to Top
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className='row md:justify-between py-8 border-t border-t-[--bs-border-color] border-b border-b-[--bs-border-color]'>
          <div className='min-[992px]:w-1/3 min-[992px]:mb-0 xl:pr-16 mb-4'>
            <div className="flex items-center mb-4">
              {theme === 'light' ?
                <Image src="/imgs/ethereum-dark.svg" alt="Ethereum Dark" width={20} height={20} />
                : <Image src="/imgs/ethereum-light.svg" alt="Ethereum Dark" width={20} height={20} />
              }
              <span className="text-xl mb-0 ml-3">
                Powered by Ethereum
              </span>
            </div>
            <p className="text-xs">
              Etherscan is a Block Explorer and Analytics Platform for Ethereum,
              a decentralized smart contracts platform.
            </p>
            <div className="mt-2 hidden md:block">
              {theme == 'light' ? <Image src="/imgs/map.png" alt="Map" width={280} height={100} /> :
                <Image src="/imgs/map-light.png" alt="Map" width={280} height={100} />
              }
            </div>
          </div>
          <div className='min-[992px]:flex-[1_0_0%] md:flex-[0_0_auto] md:w-1/3 md:mb-0 flex-[0_0_auto] w-1/2 mb-10'>
            <h4 className='text-4 font-medium mb-1'>
              Company
            </h4>
            <ul>
              <li className="py-1">
                <a
                  href="#"
                  className="text-xs footer-menu"
                >
                  About Us
                </a>
              </li>
              <li className="py-1">
                <a
                  href="#"
                  className="text-xs footer-menu"
                >
                  Brand Assets
                </a>
              </li>
              <li className="py-1">
                <a
                  href="#"
                  className="text-xs footer-menu"
                >
                  Contact Us
                </a>
              </li>
              <li className="py-1">
                <a
                  href="#"
                  className="text-xs footer-menu"
                >
                  Careers{' '}
                  <span className="bg-[#0784c3]  text-[11px] text-white small fw-medium text-nowrap rounded-full p-1 px-2">
                    We're Hiring!
                  </span>
                </a>
              </li>
              <li className="py-1">
                <a
                  href="#"
                  className="text-xs footer-menu"
                >
                  Terms of Service
                </a>
              </li>
              <li className="py-1">
                <a
                  href="#"
                  className="text-xs footer-menu"
                >
                  Bug Bounty
                </a>
              </li>
            </ul>
          </div>
          <div className='min-[992px]:flex-[1_0_0%] md:flex-[0_0_auto] md:w-1/3 md:mb-0 flex-[0_0_auto] w-1/2 mb-10'>
            <h4 className='text-4 font-medium mb-1'>
              Community
            </h4>
            <ul>
              <li className="py-1">
                <a
                  href="#"
                  className="text-xs footer-menu"
                >
                  API Documentation
                </a>
              </li>
              <li className="py-1">
                <a
                  href="#"
                  className="text-xs footer-menu"
                >
                  Knowledge Base
                </a>
              </li>
              <li className="py-1">
                <a
                  href="#"
                  className="text-xs footer-menu"
                >
                  Network Status
                </a>
              </li>
              <li className="py-1">
                <a
                  href="#"
                  className="text-xs footer-menu"
                >
                  Newsletters
                </a>
              </li>
            </ul>
          </div>
          <div className='min-[992px]:flex-[1_0_0%] md:flex-[0_0_auto] md:w-1/3 flex-[0_0_auto] w-1/2'>
            <h4 className='text-4 font-medium mb-1'>
              Products & Services
            </h4>
            <ul>
              <li className="py-1">
                <a
                  href="#"
                  className="text-xs footer-menu"
                >
                  Advertise
                </a>
              </li>
              <li className="py-1">
                <a
                  href="#"
                  className="text-xs footer-menu"
                >
                  Explorer-as-a-Service(Eaas)
                </a>
              </li>
              <li className="py-1">
                <a
                  href="#"
                  className="text-xs footer-menu"
                >
                  API Plans
                </a>
              </li>
              <li className="py-1">
                <a
                  href="#"
                  className="text-xs footer-menu"
                >
                  Priority Support
                </a>
              </li>
              <li className="py-1">
                <a
                  href="#"
                  className="text-xs footer-menu"
                >
                  Blockscan
                  <FontAwesomeIcon icon={faUpRightFromSquare} className='text-muted ml-1' />
                </a>
              </li>
              <li className="py-1">
                <a
                  href="#"
                  className="text-xs footer-menu"
                >
                  Blockscan Chat
                  <FontAwesomeIcon icon={faUpRightFromSquare} className='text-muted ml-1' />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex justify-between py-4 lg:w-full md:items-center md:flex">
          <div className="flex justify-between w-full">
            <div>
              <p className="mb-0 text-xs">
                Etherscan © 2024 (A1)
              </p>
            </div>
            <div>
              <p className="mb-0 text-xs">
                Donations:
                <a
                  className="mx-2 text-[#0784c3] hover:text-[#066a9c]"
                  href="#"
                >
                  0x71c765...d8976f
                </a>{' '}
                <i className="fa fa-heart text-[#de4437]" aria-hidden="true"></i>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
};

export default Footer;
