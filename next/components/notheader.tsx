import { useState } from "react";
import Link from "next/link";
import Logo from "../components/svg/logo";
export default function Notheader() {
  return (
    <div className="flex max-w-md fixed top-0 w-full bg-white border-b-2 md:max-w-md">
      <div className="pl-1 pr-1 p-2 flex flex-row w-full">
        <Logo />
        <div className="flex flex-1 items-center">
          <div>채움이</div>
        </div>
      </div>
    </div>
  );
}
