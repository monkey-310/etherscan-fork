"use client";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGasPump } from "@fortawesome/free-solid-svg-icons";
import ThemeToggle from "./theme-toggle";
import MainnetToggle from "./mainnet-toggle";
import { useGasPrice } from "wagmi";
import { formatDate, getTwoAfterPointNumber } from "@/app/lib/util";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const Header: React.FC = () => {
  const { data } = useGasPrice();
  const { data: price } = useQuery({
    queryKey: ["priceFeed"],
    queryFn: () =>
      axios
        .get(
          "https://api.etherscan.io/api?module=stats&action=ethprice&apikey=RXU1Q7C8WRCYPR1GMKNPXHC4TXQWP29P1G"
        )
        .then((res) => res.data),
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
  const [gas, setGas] = useState<number | null>(null);
  const [etherPrice, setEtherPrice] = useState<string | null>(null);
  const [percent, setPercent] = useState<number | null>(null);

  useEffect(() => {
    if (data) {
      setGas(Math.round(Number(data) / 1e9));
    }
  }, [data]);

  useEffect(() => {
    if (price) {
      let temp = Number(price?.result?.ethusd);
      setEtherPrice(getTwoAfterPointNumber(temp));
    }
  }, [price]);

  useEffect(() => {
    if (historyPrice) {
      let rate =
        (Number(Number(price?.result?.ethusd)) * 100) /
          Number(historyPrice?.market_data?.current_price?.usd) -
        100;
      const percent = Math.round(rate * 100) / 100;
      setPercent(percent);
    }
  }, [historyPrice]);

  return (
    <section className="hidden min-[992px]:block sticky top-0 z-[1020] border-b border-solid border-b-[var(--bs-border-color)] bg-[var(--bs-bg-color)] py-1">
      <div className="container-xxl flex items-center justify-between">
        <div className="flex sm:items-center gap-4 w-100 text-[0.785rem]">
          <div className="text-muted">
            <span className="text-muted">ETH Price:</span>
            <a href="/chart/etherprice" className="text-[#0784c3]">
              {" "}
              ${etherPrice}
            </a>
            <span>
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
            </span>
          </div>
          <div className="text-muted">
            <FontAwesomeIcon icon={faGasPump} />
            {" Gas: "}
            <span>
              <a href="#" className="text-[#0784c3]">
                <span>{gas?.toString()}</span>
                {" Gwei"}
              </a>
            </span>
          </div>
        </div>
        <div className="flex items-center justify-end gap-2">
          <ThemeToggle />
          <MainnetToggle />
        </div>
      </div>
    </section>
  );
};

export default Header;
