import React from "react";
import { useEnsName } from "wagmi";

export default function ENSName({ miner }: { miner: `0x${string}` }) {
  const { data: ensName } = useEnsName({ address: miner });

  return (
    <a href="#" className="text-[#0783c4]">
      <span>
        {ensName
          ? ensName.split(".")[0]
          : `${miner.toString().slice(0, 10)}...${miner.slice(-8)}`}
      </span>
      {ensName ? (
        <span className="custom-tooltip" style={{ left: "-150%" }}>
          {miner.toString()}
          <div className="custom-tooltip-arrow"></div>
        </span>
      ) : (
        <span className="custom-tooltip">
          {miner.toString()}
          <div className="custom-tooltip-arrow"></div>
        </span>
      )}
    </a>
  );
}
