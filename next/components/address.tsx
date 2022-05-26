import DaumPostcode from "react-daum-postcode";
import { useState } from "react";

export default function Address() {
  const [address, setAddress] = useState("");
  const [addressDetail, setAddressDetail] = useState("");
  const [isOpenPost, setIsOpenPost] = useState(false);
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

    setAddress(data.zonecode);
    setAddressDetail(fullAddr);
    setIsOpenPost(false);
  };
  return (
    <>
      {isOpenPost ? (
        <DaumPostcode autoClose onComplete={onCompletePost} />
      ) : null}
    </>
  );
}
