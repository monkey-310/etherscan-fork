import React from 'react'
import { useEnsName } from 'wagmi';


export default function ENSName({ miner }: { miner: `0x${string}` }) {
  const { data: ensName } = useEnsName({ address: miner });

  return (
    <a href="#" className='text-[#0783c4]'>
      <span>{ensName ? ensName.split(".")[0] : `${miner.toString().slice(0, 10)}...${miner.slice(-8)}`}</span>
    </a>
  )
}
