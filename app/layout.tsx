import type { Metadata } from "next";
import "font-awesome/css/font-awesome.min.css";

import "./globals.css";
import ThemeProvider from "./theme-provider";
import EthereumProvider from "./ethereum-provider";

export const metadata: Metadata = {
  title: "Ethereum (ETH) Blockchain Explorer",
  description: "Etherscan allows you to explore and search the Ethereum blockchain for transactions, addresses, tokens, prices and other activities taking place on Ethereum (ETH)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <EthereumProvider>
          <ThemeProvider>
            {children}
          </ThemeProvider>
        </EthereumProvider>
      </body>
    </html>
  );
}
