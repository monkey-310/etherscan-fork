import React, { useContext } from "react";
import Image from "next/image";
import { ThemeConext } from "@/app/theme-provider";
import { ThemeContextType } from "@/app/lib/definition";

const MainnetToggle = () => {
  const { theme } = useContext(ThemeConext) as ThemeContextType;

  return (
    <div className="my-2">
      <span className="text-sm">
        <a
          href="#"
          id="etherMainnet"
          data-dropdown-toggle="etherMainnetToggle"
          data-dropdown-placement="left"
          data-dropdown-offset-distance="-37"
          data-dropdown-offset-skidding="125"
          className="py-[10px] px-[12px] border border-solid border-[var(--bs-border-color)] hover:bg-[var(--bs-toggle-button-hover)] rounded-md"
        >
          {theme === "light" ? (
            <Image
              src="imgs/ethereum-dark.svg"
              className="inline"
              width={10}
              height={10}
              alt="Ethererum Logo"
            />
          ) : (
            <Image
              src="imgs/ethereum-light.svg"
              className="inline"
              width={10}
              height={10}
              alt="Ethererum Logo"
            />
          )}
        </a>
      </span>
      <div
        id="etherMainnetToggle"
        className="z-[1000] hidden bg-[var(--bs-bg-color)] border border-solid border-[var(--bs-border-color)] divide-y p-2 divide-[var(--bs-border-color)] rounded-lg shadow w-50"
      >
        <ul
          className="py-2 text-sm text-[var(--bs-text-color)]"
          aria-labelledby="etherMainnet"
        >
          <li>
            <a
              href="#"
              className="block px-4 py-2 text-xs hover:rounded-md hover:bg-[var(--bs-toggle-button-hover)] active:text-[#0784c3] focus:text-[#0784c3]"
            >
              Ethereum Mainnet
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block px-4 py-2 text-xs hover:rounded-md hover:bg-[var(--bs-toggle-button-hover)] active:text-[#0784c3] focus:text-[#0784c3]"
            >
              Ethereum Mainnet
              <span className="text-[var(--bs-text-color)] text-[9px] ml-2 px-2 py-0.5 rounded-md bg-[var(--bs-bg-icon-card)] border border-solid border-[var(--bs-border-color)] font-bold">
                CN
              </span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block px-4 py-2 text-xs hover:rounded-md hover:bg-[var(--bs-toggle-button-hover)] active:text-[#0784c3] focus:text-[#0784c3]"
            >
              Beaconscan
              <span className="text-[var(--bs-text-color)] text-[9px] ml-2 px-2 py-0.5 rounded-md bg-[var(--bs-bg-icon-card)] border border-solid border-[var(--bs-border-color)] font-bold">
                ETH2
              </span>
            </a>
          </li>
        </ul>
        <div className="py-1 text-[var(--bs-text-color)]">
          <a
            href="#"
            className="block px-4 py-2 text-xs hover:rounded-md hover:bg-[var(--bs-toggle-button-hover)] active:text-[#0784c3] focus:text-[#0784c3]"
          >
            Goerli Testnet
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-xs hover:rounded-md hover:bg-[var(--bs-toggle-button-hover)] active:text-[#0784c3] focus:text-[#0784c3]"
          >
            Sepolia Testnet
          </a>
        </div>
      </div>
    </div>
  );
};

export default MainnetToggle;
