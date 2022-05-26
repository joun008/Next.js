import { useState } from "react";
import Card from "../components/card";
import Header from "../components/header";
import Newcard from "../components/newcard";
import { useProduct } from "../hooks/useProduct";
import { typeCard } from "../type";
export interface ICard {
  typeCard;
  key: number;
}
export default function Index() {
  const { data: product, isLoading } = useProduct();

  return (
    <>
      {!isLoading && product !== undefined ? (
        <div className="flex flex-col justify-center items-center">
          <Header />
          <div className="flex flex-col justify-center items-center max-w mt-16">
            {product.map(function (item: typeCard, index: number) {
              return <Newcard key={index} props={item} />;
            })}
          </div>
          <div className="flex flex-col justify-center items-center max-w space-y-5 pl-1 pr-1 mt-16">
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      ) : null}
    </>
  );
}
