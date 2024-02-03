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

      <div className="flex flex-row gap-8 mt-[4rem] justify-center w-full max-w-4xl">
        <div className="flex-1 max-w-md ">
          <div className="bg-white bg-opacity-15 rounded-[1rem] p-8 h-full w-full">
            <Link href="https://www.swri.org/">
              <div>
                <div className="bg-white rounded-[1rem] p-4 hover:bg-[#F2B488] transition">
                  <SwriLogo className="fill-[#251F47] h-36" />
                </div>
                <div className="mt-4">
                  <h2 className="text-3xl text-center">
                    <span className={inclusiveSans.className}>
                      Southwest Research Institute
                    </span>
                  </h2>
                  <p className={`text-center mt-4 ${inclusiveSans.className}`}>
                    Southwest Research Institute (SwRI) is a premier
                    independent, non-profit applied research and development
                    organization headquartered in San Antonio, Texas, with
                    additional locations in Boulder, Colorado, and Ann Arbor,
                    Michigan, among others. Established in 1947, SwRI has grown
                    into one of the leading research institutions in the United
                    States, providing innovative solutions to clients across
                    various industries.
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div className="flex-1 max-w-md ">
          <div className="bg-white bg-opacity-15 rounded-[1rem] p-8 h-full w-full">
            <Link href="https://www.mcleodsoftware.com/">
              <div>
                <div className="bg-white rounded-[1rem] p-4 hover:bg-[#F2B488] transition">
                  <McLeodLogo className="fill-[#251F47] h-36" />
                </div>
                <div className="mt-4">
                  <h2 className="text-3xl text-center">
                    <span className={inclusiveSans.className}>
                      McLeod Software
                    </span>
                  </h2>
                  <p className={`text-center mt-4 ${inclusiveSans.className}`}>
                    McLeod Software stands as a leading provider of
                    transportation management software solutions, renowned for
                    its innovative technologies tailored to the logistics and
                    trucking industry. Founded in the early 1980s by Tom McLeod,
                    the company has established itself as a trusted partner for
                    businesses seeking efficient, scalable, and comprehensive
                    software solutions to streamline their operations.
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
