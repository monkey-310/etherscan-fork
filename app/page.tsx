'use client';

import Script from 'next/script';
import Header from "./components/header";
import Navbar from "./components/navbar";
import Main from './components/main';
import Footer from "./components/footer";


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


