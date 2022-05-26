import { useState } from "react";
import { typeCard } from "../type";
import { ICard } from "../pages";
import { result } from "./header";
export default function Newcard(props: ICard["typeCard"]) {
  const [data, Setdata] = useState(0);
  const onChange = (e: any) => {
    const { value } = e.target;
    const onlyNumber = value.replace(/[^0-9]/g, "");
    Setdata(onlyNumber);
    result.set(props.props.id, {
      productId: props.props.id,
      count: Number(onlyNumber),
    });
    console.log(result);
    console.log(Object.fromEntries(result));
  };
  return (
    <div className="flex max-w-md w-full border-b-2">
      <div className="flex flex-row">
        <img
          className="ml-1 mt-2 mb-2 mr-1 w-20 h-20 "
          src={props.props.image}
          alt=""
          loading="lazy"
        />
        <div className="flex flex-col">
          <div className="text-xs mt-2 flex flex-row text-green-500">
            {props.props.brand}
            <div className="ml-1 pl-2 pr-2 rounded-md bg-purple-200 text-purple-700">
              샴푸
            </div>
          </div>
          <div className="text-sm ">{props.props.name}</div>
          <div className="text-sm flex flex-row">
            <div>가격 : </div>
            <div className="text-red-700">{props.props.price}</div>
            <div>원/g </div>
          </div>

          <div className="flex flex-row">
            <div className="flex flex-1">
              <input
                className="w-1/4 rounded-md text-base bg-gray-200"
                type="text"
                name="id"
                placeholder="0g"
                onChange={onChange}
              />
              g 리필하기
            </div>

            <div className="font-bold mr-2">
              {props.props.price * data}원 결제
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
