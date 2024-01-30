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
      <div className="grid grid-cols-2 gap-8 mt-[3rem]">
        <div className=" bg-white bg-opacity-15 p-5 rounded-[1rem]">
          <h2
            className={twMerge("text-3xl text-center", inclusiveSans.className)}
          >
            Best Overall Hack
          </h2>
          <h3 className="text-xl opacity-80 text-center mb-3 mt-3">
            Intermediate Teams
          </h3>
          <p className="text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
        <div className=" bg-white bg-opacity-15 p-5 rounded-[1rem]">
          <h2
            className={twMerge("text-3xl text-center", inclusiveSans.className)}
          >
            Best Overall Hack
          </h2>
          <h3 className="text-xl opacity-80 text-center mb-3 mt-3">
            Intermediate Teams
          </h3>
          <p className="text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
        <div className=" bg-white bg-opacity-15 p-5 rounded-[1rem]">
          <h2
            className={twMerge("text-3xl text-center", inclusiveSans.className)}
          >
            Best Overall Hack
          </h2>
          <h3 className="text-xl opacity-80 text-center mb-3 mt-3">
            Intermediate Teams
          </h3>
          <p className="text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
        <div className=" bg-white bg-opacity-15 p-5 rounded-[1rem]">
          <h2
            className={twMerge("text-3xl text-center", inclusiveSans.className)}
          >
            Best Overall Hack
          </h2>
          <h3 className="text-xl opacity-80 text-center mb-3 mt-3">
            Intermediate Teams
          </h3>
          <p className="text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
    </div>
  );
}
