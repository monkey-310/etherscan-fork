'use client';

import 'flowbite/dist/flowbite';
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
    </>
  );
}


