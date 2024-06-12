'use client';

import React, { useContext, useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import { ThemeConext } from "@/app/theme-provider";
import { EthereumContextType, ThemeContextType } from '@/app/lib/definition';
import { getTwoAfterPointNumber } from '@/app/lib/util';
import { ethers } from "ethers";
import { EthereumContext } from '@/app/ethereum-provider';

const chainlinkEthBtcAbi = [
  {
    "inputs": [],
    "name": "latestRoundData",
    "outputs": [
      { "internalType": "uint80", "name": "roundId", "type": "uint80" },
      { "internalType": "int256", "name": "answer", "type": "int256" },
      { "internalType": "uint256", "name": "startedAt", "type": "uint256" },
      { "internalType": "uint256", "name": "updatedAt", "type": "uint256" },
      { "internalType": "uint80", "name": "answeredInRound", "type": "uint80" },
    ],
    "stateMutability": "view",
    "type": "function",
  },
];
const chainlinkEthUsdAddress = "0x5f4ec3df9cbd43714fe2740f5e3616155c5b8419";
const chainlinkEthBtcAddress = "0xAc559F25B1619171CbC396a50854A3240b6A4e99";

const chainlinkEthUsdAbi = [
  "function latestRoundData() external view returns ( uint80 roundId, int256 answer, uint256 startedAt, uint256 updatedAt, uint80 answeredInRound)",
  "function getRoundData(uint80 _roundId) external view returns ( uint80 roundId, int256 answer, uint256 startedAt, uint256 updatedAt, uint80 answeredInRound)"
];

const EtherPrice: React.FC = () => {
  const { theme } = useContext(ThemeConext) as ThemeContextType;
  const { provider } = useContext(EthereumContext) as EthereumContextType;
  const priceFeedEthUSD = useRef(new ethers.Contract(chainlinkEthUsdAddress, chainlinkEthUsdAbi, provider));
  const priceFeedEthBTC = useRef(new ethers.Contract(chainlinkEthBtcAddress, chainlinkEthBtcAbi, provider));
  const [ethPrice, setEthPrice] = useState<string | null>(null);
  const [btcPrice, setBtcPrice] = useState<string | null>(null);
  const [percent, setPercent] = useState<number | null>(null);

  const getEthUSDPrice: Function = async () => {
    const latestRoundData = await priceFeedEthUSD.current.latestRoundData();
    const latestPrice = latestRoundData.answer;
    setEthPrice(getTwoAfterPointNumber(Number(latestPrice) / 1e8));
    const currentTime = Math.floor(Date.now() / 1000);
    const targetTime = currentTime - 24 * 60 * 60;
    let roundId = latestRoundData.roundId;
    let roundData;
    do {
      roundData = await priceFeedEthUSD.current.getRoundData(roundId);
      roundId -= BigInt(10);
    } while (roundData.updatedAt > targetTime && roundId > 0);
    const price24HoursAgo = roundData.answer;
    let rate = Number(latestPrice) * 100 / Number(price24HoursAgo) - 100;
    const percent = Math.round(rate * 100) / 100;
    setPercent(percent);
  }

  const getEthBTCPrice: Function = async () => {
    const latestRoundData = await priceFeedEthBTC.current.latestRoundData();
    const price = ethers.formatUnits(latestRoundData.answer, 8);
    setBtcPrice(price);
  }

  useEffect(() => {
    getEthUSDPrice();
    getEthBTCPrice();
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