'use client';

import Script from 'next/script';
import Header from "./components/sections/header";
import Navbar from "./components/sections/navbar";
import Main from './components/sections/main';
import Footer from "./components/sections/footer";


export default function Home() {

  return (
    <>
      <Header />
      <Navbar />
      <Main />
      <Footer />
      <Script type="module" src="/_next/static/flowbite.js" strategy="beforeInteractive" />
    </>
  );
}


