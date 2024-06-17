"use client";

import React from "react";
import MainBox from "./mainbox";
import Search from "./search";
import CardWrapper from "./cardwrapper";

const Main: React.FC = () => {
  return (
    <main className="flex-grow min-h-[120] bg-[var(--bs-bg-color)]">
      <Search />
      <section className="container-xxl pb-20">
        <MainBox />
        <CardWrapper />
      </section>
    </main>
  );
};

export default Main;
