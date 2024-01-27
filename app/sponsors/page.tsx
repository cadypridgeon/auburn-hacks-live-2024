import Image from "next/image";
import McLeodLogo from "@/components/McLeodLogo";
import SwriLogo from "@/components/SwriLogo";
import { Inclusive_Sans } from "next/font/google";
import Link from "next/link";
const inclusiveSans = Inclusive_Sans({
  subsets: ["latin", "latin-ext"],
  weight: "400",
  display: "swap",
});

export default function Sponsors() {
  return (
    <div className="flex min-h-screen flex-col items-center p-24">
      <h1 className="h1 mt-[6rem]">Sponsors</h1>

      <div className="flex flex-row gap-5 mt-[4rem] justify-center ">
        <div className=" bg-white bg-opacity-15 p-5 max-w-sm rounded-[1rem]">
          <Link href="https://www.swri.org/">
            <div className="bg-white rounded-[1rem] p-2 hover:bg-[#F2B488] transition">
              <SwriLogo className="fill-[#251F47] h-36" />
            </div>
          </Link>
          <h2 className="text-3xl text-center">
            <span className={inclusiveSans.className}>
              Southwest Research Institute
            </span>
          </h2>
          <p className="text-center">blah blah blah info here</p>
        </div>
        <div className=" bg-white bg-opacity-15 p-5 rounded-[1rem]">
          <Link href="https://www.mcleodsoftware.com/">
            <div className="bg-white rounded-[1rem] p-2 hover:bg-[#F2B488] transition">
              <McLeodLogo className="fill-[#251F47] h-36" />
            </div>
          </Link>
          <h2 className="text-3xl text-center">
            <span className={inclusiveSans.className}>McLeod Software</span>
          </h2>
          <p className="text-center">blah blah blah info here</p>
        </div>
      </div>
    </div>
  );
}
