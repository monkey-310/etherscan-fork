import React from "react";
import Card from "./card";

const CardWrapper: React.FC = () => {
  return (
    <div className="row mt-0 bg-[var(--bs-bg-color)]">
      <div className=" pr-2 mb-4 lg:w-1/2">
        <Card title="block" />
      </div>
      <div className="mb-4 lg:w-1/2 pl-2">
        <Card title="transaction" />
      </div>
    </div>
  );
};

export default CardWrapper;
