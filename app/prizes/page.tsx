import { twMerge } from "tailwind-merge";
import { Inclusive_Sans } from "next/font/google";
const inclusiveSans = Inclusive_Sans({
  subsets: ["latin", "latin-ext"],
  weight: "400",
  display: "swap",
});

export default function Prizes() {
  return (
    <div className="flex min-h-screen flex-col items-center p-24">
      <h1 className="h1 mt-[6rem]">Prizes</h1>
      <div className="grid grid-cols-2 gap-8 mt-[4rem] max-w-4xl">
        <div className="bg-white bg-opacity-15 rounded-[1rem] flex flex-col">
          <div className="p-8 flex-1">
            <h2
              className={twMerge(
                "text-3xl text-center",
                inclusiveSans.className
              )}
            >
              Best Overall Hack
            </h2>
            <h3 className="text-xl opacity-80 text-center mb-2 mt-2">
              All Teams
            </h3>
            <p className="text-center">
              First-place project! Each team member will receive $500.
            </p>
          </div>
        </div>
        <div className="bg-white bg-opacity-15 rounded-[1rem] flex flex-col">
          <div className="p-8 flex-1">
            <h2
              className={twMerge(
                "text-3xl text-center",
                inclusiveSans.className
              )}
            >
              Best Overall Hack Runner Up
            </h2>
            <h3 className="text-xl opacity-80 text-center mb-2 mt-2">
              All Teams
            </h3>
            <p className="text-center">
              Second-place project! Each team member will receive $300.
            </p>
          </div>
        </div>
        <div className="bg-white bg-opacity-15 rounded-[1rem] flex flex-col">
          <div className="p-8 flex-1">
            <h2
              className={twMerge(
                "text-3xl text-center",
                inclusiveSans.className
              )}
            >
              Best Overall Hack: Newcomers
            </h2>
            <h3 className="text-xl opacity-80 text-center mb-2 mt-2">
              Newcomer Teams
            </h3>
            <p className="text-center">
              First-place beginner project! Each team member will receive $250.
            </p>
          </div>
        </div>
        <div className="bg-white bg-opacity-15 rounded-[1rem] flex flex-col">
          <div className="p-8 flex-1">
            <h2
              className={twMerge(
                "text-3xl text-center",
                inclusiveSans.className
              )}
            >
              Best in Theme
            </h2>
            <h3 className="text-xl opacity-80 text-center mb-2 mt-2">
              All Teams
            </h3>
            <p className="text-center">
              Best thematic project! Our theme this year is Cosmic Escape. Each
              team member will receive $100.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
