'use client';

import React, { useContext, useEffect, useState } from 'react';
import Image from 'next/image';
import { ThemeConext } from "@/app/theme-provider";
import { ThemeContextType } from '@/app/lib/definition';
import { getTwoAfterPointNumber } from '@/app/lib/util';
import { useReadContracts } from 'wagmi';
import { chainlinkEthUsdAbi, chainlinkEthBtcAbi } from '@/app/lib/data';
import { ethers } from 'ethers'

const chainlinkEthUsdAddress = "0x5f4eC3Df9cbd43714FE2740f5E3616155c5b8419";
const chainlinkEthBtcAddress = "0xAc559F25B1619171CbC396a50854A3240b6A4e99";

// const chainlinkEthUsdAbi = [
//   "function latestRoundData() external view returns ( uint80 roundId, int256 answer, uint256 startedAt, uint256 updatedAt, uint80 answeredInRound)",
//   "function getRoundData(uint80 _roundId) external view returns ( uint80 roundId, int256 answer, uint256 startedAt, uint256 updatedAt, uint80 answeredInRound)"
// ];

const ethUSDContract = {
  address: '0x5f4eC3Df9cbd43714FE2740f5E3616155c5b8419',
  abi: chainlinkEthUsdAbi,
} as const
const ethBTCContract = {
  address: '0xAc559F25B1619171CbC396a50854A3240b6A4e99',
  abi: chainlinkEthBtcAbi,
} as const

const EtherPrice: React.FC = () => {
  const { theme } = useContext(ThemeConext) as ThemeContextType;
  const { data } = useReadContracts({
    contracts: [
      {
        ...ethUSDContract,
        functionName: 'latestRoundData'
      },
      {
        ...ethUSDContract,
        functionName: 'getRoundData'
      },
      {
        ...ethBTCContract,
        functionName: "latestRoundData"
      }
    ]
  });

  const [ethPrice, setEthPrice] = useState<string | null>(null);
  const [btcPrice, setBtcPrice] = useState<string | null>(null);
  const [percent, setPercent] = useState<number | null>(null);

  // const getEthUSDPrice: Function = async () => {
  //   const latestRoundData = await priceFeedEthUSD.current.latestRoundData();
  //   const `latestPrice` = latestRoundData.answer;
  //   setEthPrice(getTwoAfterPointNumber(Number(latestPrice) / 1e8));
  //   const currentTime = Math.floor(Date.now() / 1000);
  //   const targetTime = currentTime - 24 * 60 * 60;
  //   let roundId = latestRoundData.roundId;
  //   let roundData;
  //   do {
  //     roundData = await priceFeedEthUSD.current.getRoundData(roundId);
  //     roundId -= BigInt(10);
  //   } while (roundData.updatedAt > targetTime && roundId > 0);
  //   const price24HoursAgo = roundData.answer;
  //   let rate = Number(latestPrice) * 100 / Number(price24HoursAgo) - 100;
  //   const percent = Math.round(rate * 100) / 100;
  //   setPercent(percent);
  // }

  // const getEthBTCPrice: Function = async () => {
  //   const latestRoundData = await priceFeedEthBTC.current.latestRoundData();

  //   setBtcPrice(price);
  // }

  useEffect(() => {
    // getEthUSDPrice();
    // getEthBTCPrice();
    if (data) {
      // setEthPrice(getTwoAfterPointNumber(Number(usdPrice) / 1e8))
    }
  }, [data]);

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
        <a href="#" className='text-[15px]'>
          ${ethPrice}
          <span className='text-[#6c757d]'> @ {btcPrice} BTC</span>
          {percent &&
            (<span className={`text-xs ${percent > 0 ? "text-[#00a186]" : "text-[#dc3545]"}`}>
              ({percent < 0 ? `${percent}%` : `+${percent}%`})
            </span>)}
        </a>
      </div>
    </div>
  )
}

export default EtherPrice;