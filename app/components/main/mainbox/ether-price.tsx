"use client";

import React, { useContext, useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { ThemeConext } from "@/app/theme-provider";
import { ThemeContextType } from "@/app/lib/definition";
import { formatDate, getTwoAfterPointNumber } from "@/app/lib/util";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const etherscanAPI =
  "https://api.etherscan.io/api?module=stats&action=ethprice&apikey=RXU1Q7C8WRCYPR1GMKNPXHC4TXQWP29P1G";

const EtherPrice: React.FC = () => {
  const { theme } = useContext(ThemeConext) as ThemeContextType;
  const { data } = useQuery({
    queryKey: ["priceFeed"],
    queryFn: () => axios.get(etherscanAPI).then((res) => res.data),
  });
  const { data: historyPrice } = useQuery({
    queryKey: ["historyPrice"],
    queryFn: () =>
      axios
        .get(
          `https://api.coingecko.com/api/v3/coins/ethereum/history?date=${formatDate(
            Date.now() - 24 * 60 * 60000
          )}`
        )
        .then((res) => res.data),
  });

  const price = useMemo(() => {
    if (data) {
      let temp = Number(data.result?.ethusd);
      return {
        ethPrice: getTwoAfterPointNumber(temp),
        btcPrice: data.result?.ethbtc.slice(0, 8),
      };
    }
  }, [data]);

  const percent = useMemo(() => {
    if (historyPrice) {
      let rate =
        (Number(Number(data?.result?.ethusd)) * 100) /
          Number(historyPrice?.market_data?.current_price?.usd) -
        100;
      return Math.round(rate * 100) / 100;
    }
  }, [historyPrice]);

  return (
    <div className="flex">
      <div className="text-center mr-3 w-6">
        {theme === "light" ? (
          <Image
            src="/imgs/ethereum-dark.svg"
            className="mx-auto max-w-full"
            width={18}
            height={18}
            alt="Ethereum Logo"
          />
        ) : (
          <Image
            src="/imgs/ethereum-light.svg"
            className="mx-auto max-w-full"
            width={18}
            height={18}
            alt="Ethereum Logo"
          />
        )}
      </div>
      <div className="flex-grow">
        <div className="text-cap mb-[1px]">Ether Price</div>
        <a href="#" className="text-[15px]">
          ${price?.ethPrice}
          <span className="text-[#6c757d]"> @ {price?.btcPrice} BTC</span>
          {percent ? (
            <span
              className={`text-xs ${
                percent > 0 ? "text-[#00a186]" : "text-[#dc3545]"
              }`}
            >
              ({percent < 0 ? `${percent}%` : `+${percent}%`})
            </span>
          ) : (
            ""
          )}
        </a>
      </div>
    </div>
  );
};

export default EtherPrice;
