import { useState } from "react";
import Link from "next/link";
import Logo from "../components/svg/logo";

export const result = new Map<number, Object>();
export default function Header() {
  return (
    <div className="flex max-w-md fixed top-0 w-full bg-white border-b-2">
      <div className="pl-1 pr-1 p-2 flex flex-row w-full">
        <Logo />
        <div className="flex flex-1 items-center">
          <div>채움이</div>
        </div>
        <div className="flex items-center border-2 bg-white border-gray-200 rounded-lg hover:bg-gray-200">
          <Link
            href={{
              pathname: "/order",
            }}
          >
            <div>결제하기</div>
          </Link>
        </div>
      </div>
    </div>
  );
}
