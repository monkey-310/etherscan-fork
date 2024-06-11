'use client';

import React, { useContext, useEffect, useState } from 'react';
import Image from 'next/image';
import { ThemeConext } from "@/app/theme-provider";
import { ThemeContextType } from '@/app/lib/definition';
import { getTwoAfterPointNumber } from '@/app/lib/util';
import { ethers } from "ethers";

const chainlinkEthUsdAddress = "0x5f4ec3df9cbd43714fe2740f5e3616155c5b8419";

const chainlinkEthUsdAbi = [
  "function latestAnswer() view returns (int256)"
];

const provider = new ethers.JsonRpcProvider('https://mainnet.infura.io/v3/4f17c7ed82ea4b5cb7632ef7f8d0ab75')
const priceFeed = new ethers.Contract(chainlinkEthUsdAddress, chainlinkEthUsdAbi, provider);

const EtherPrice: React.FC = () => {
  const [ethPrice, setEthPrice] = useState<string | null>(null);
  const { theme } = useContext(ThemeConext) as ThemeContextType;

  const getEthPrice: Function = async () => {
    const price = await priceFeed.latestAnswer();
    setEthPrice(getTwoAfterPointNumber(Number(price) / 1e8));
    console.log(Number(price) / 1e8);
  }

  useEffect(() => {
    getEthPrice();
    const interval = setInterval(() => {
      getEthPrice();
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='flex'>
      <div className='text-center mr-3 w-6'>
        {theme === 'light' ?
          <Image src="/imgs/ethereum-dark.svg" className='mx-auto max-w-full' width={18} height={18} alt="Ethereum Logo" />
          :
          <Image src="/imgs/ethereum-light.svg" className='mx-auto max-w-full' width={18} height={18} alt="Ethereum Logo" />
        }
      </div>
      <div className='flex-grow'>
        <div className='text-cap mb-[1px]'>Ether Price</div>
        <a href="/chart/etherprice" className='text-4'>
          ${ethPrice}
          <span className='text-[#6c757d]'> @ 0.053375 BTC</span>
          <span className='text-xs text-[#00a186]'> (+0.76%)</span>
        </a>
      </div>
    </div>
  )
}

export default EtherPrice;