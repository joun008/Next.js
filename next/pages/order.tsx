import { useState } from "react";
import Notheader from "../components/notheader";
import DaumPostcode from "react-daum-postcode";
import { result } from "../components/header";

export default function Order() {
  const productJson = Object.fromEntries(result);
  console.log(productJson);
  const [reservation, setReservation] = useState("");
  const [user, setUser] = useState({
    name: "",
    phone: "",
    address: "",
  });
  const [addressNumber, setAddressNumber] = useState("");
  const [addressLoad, setAddressLoad] = useState("");
  const [isOpenPost, setIsOpenPost] = useState(false);
  const [addressDetail, setAddressDetail] = useState("");
  const [push, setPush] = useState(false);
  const onChangeOpenPost = () => {
    setIsOpenPost(!isOpenPost);
  };
  const onCompletePost = (data: any) => {
    let fullAddr = data.address;
    let extraAddr = "";

    if (data.addressType === "R") {
      if (data.bname !== "") {
        extraAddr += data.bname;
      }
      if (data.buildingName !== "") {
        extraAddr +=
          extraAddr !== "" ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddr += extraAddr !== "" ? ` (${extraAddr})` : "";
    }

    setAddressNumber(data.zonecode);
    setAddressLoad(fullAddr);
    setIsOpenPost(true);
  };
  const onChangeuser = (e: any) => {
    console.log(e);
    setUser({ ...user, [e.target.id]: e.target.value });
    console.log(user);
  };
  const onChangeres = (e: any) => {
    const { value } = e.target;
    const number = new Date(value).getDay();
    if (number == 2 || number == 5) {
      setReservation(e.target.value);
    } else {
      alert("화요일 또는 금요일만 가능합니다");
    }
  };
  const onChangeAddress = (e: any) => {
    setAddressDetail(e.target.value);
  };
  const onClickPush = () => {
    setPush(!push);
  };
  const onClick = () => {
    console.log(user);
  };
  return (
    <div className="flex justify-center items-center">
      <Notheader />
      <div className="flex flex-col max-w-md items-center w-full mt-16">
        <div className="flex flex-row p-4">
          <label htmlFor="start" className="text-xl p-4 text-left">
            날짜
          </label>
          <input
            type="date"
            id="start"
            name="trip-start"
            value={reservation}
            onChange={onChangeres}
            min="2022-01-01"
            max="2023-01-01"
          />
        </div>
        <div className="flex flex-col items-center">
          <div className="text-sm ">화요일, 금요일만 주문 가능합니다!</div>
        </div>

        <div className="p-4">
          <label htmlFor="name" className="text-xl p-4">
            이름
          </label>
          <input
            id="name"
            value={user.name}
            onChange={onChangeuser}
            type="text"
            className="border-2 rounded-lg outline-none border-purple-200 focus:border-purple-400"
          />
        </div>

        <div className="p-4">
          <label htmlFor="phone" className="text-xl p-4">
            전화번호
          </label>
          <input
            id="phone"
            value={user.phone}
            onChange={onChangeuser}
            type="phone"
            className="border-2 rounded-lg outline-none border-purple-200 focus:border-purple-400"
          />
        </div>
        <div className="">
          {push ? null : (
            <div className="text-xl p-4" onClick={onClickPush}>
              주소 찾기
            </div>
          )}
          {push ? <DaumPostcode onComplete={onCompletePost} /> : null}
          {isOpenPost ? (
            <div className="p-4 content-center flex flex-col items-center">
              <div className="text-xl">지번</div>
              <div className=""> {addressNumber}</div>
              <div className="text-xl">도로명 주소</div>
              <div className="pl-2 pr-2">{addressLoad}</div>
              <div>상세주소</div>
              <input
                id="detailAddress"
                value={addressDetail}
                onChange={onChangeAddress}
                className="border-2 rounded-lg outline-none border-purple-200 focus:border-purple-400"
              ></input>
            </div>
          ) : null}
        </div>
        <label className="text-xl">가격</label>
        <div className="" onClick={onClick}>
          주문하기
        </div>
      </div>
    </div>
  );
}
