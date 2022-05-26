import { useState } from "react";
import { typeCard } from "../type";

export default function Card() {
  const [data, Setdata] = useState(0);
  const onChange = (e: any) => {
    const { value } = e.target;
    const onlyNumber = value.replace(/[^0-9]/g, "");
    Setdata(onlyNumber);
    console.log(onlyNumber);
  };
  return (
    <div className=" flex justify-center max-w-md mx-auto rounded-lg border-2">
      <div className="pt-2 flex flex-col">
        <div className="flex flex-row">
          <div className="md:shrink-0">
            <img
              className="pl-1 w-48 h-52 object-cover md:h-44 md:w-48"
              src="/img/store.jpg"
              alt=""
              loading="lazy"
            />
          </div>
          <div className="w-1/2 h-52 flex flex-col space-y-2 content-center pr-1">
            <p className="pl-3 font-bold">- 상품명</p>
            <p className="pl-5 break-words">
              유칼립투스 스칼프 클레리파잉 샴푸
            </p>
            <p className="pl-3 font-bold">- 상품브랜드</p>
            <p className="pl-5">아로마티카</p>
            <p className="pl-3 font-bold">- 가격 : 2원/g</p>
          </div>
        </div>
        <div className="flex flex-col text-center justify-items-center">
          <div className="pt-2 pb-2">주문하실 g수 (최소 500g 이상)</div>
          <div className="pb-2">
            <input
              className="w-1/3 px-2 py-1 text-sm border-2 rounded-lg outline-none focus:border-purple-700"
              type="text"
              name="id"
              placeholder="0g"
              onChange={onChange}
            ></input>
          </div>
        </div>
      </div>
    </div>
  );
}
