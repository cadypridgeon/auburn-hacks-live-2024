"use client";
import { Inclusive_Sans } from "next/font/google";
import { twMerge } from "tailwind-merge";
const inclusiveSans = Inclusive_Sans({
  subsets: ["latin", "latin-ext"],
  weight: "400",
  display: "swap",
});

const ScheduleTable = () => {
  return (
    <table
      className={
        (twMerge("table-auto border-collapse w-full text-white"),
        inclusiveSans.className)
      }
    >
      <thead className="text-white mb-10">
        <tr>
          <th className="px-8 w-[10%]"></th>
          <th className="h3 px-16 pb-10">Saturday</th>
          <th className="h3 px-24 pb-10">Sunday</th>
          <th className="px-8 w-[10%]"></th>
        </tr>
      </thead>
      <tbody className="divide-y text-white pt-5 text-opacity-80 p-5">
        <tr className="text-center h-12 pt-10">
          <td>
            <span className=" text-opacity-40">8 AM</span>
          </td>
          <td></td>
          <td
            rowSpan={2}
            className=" bg-yellow-100 text-black w-full rounded-[1rem]"
          >
            <TableRowWithModal
              title={"Breakfast"}
              time={"8 AM - 10 AM"}
              loc={"Grand Hall"}
              desc={"Fuel up for the rest of the day!"}
            />
          </td>
          <td>8 AM</td>
        </tr>
        <tr className="text-center h-12">
          <td>9 AM</td>
          <td rowSpan={1} className=" bg-purple-200 rounded-[1rem] text-black">
            <TableRowWithModal
              title={"Check In"}
              time={"9 AM - 11 AM"}
              loc={"Front Desk"}
              desc={"Check In with Auburn Hacks Staff"}
            />
          </td>
          {/* No 3rd td because the row above (breakfast arrives) takes up 2 rows*/}
          <td>9 AM</td>
        </tr>
        <tr className="text-center  h-12">
          <td>10 AM</td>
          <td>Placeholder</td>
          <td>Placeholder</td>
          <td>10 AM</td>
        </tr>
        <tr className="text-center h-12">
          <td>11 AM</td>
          <td>Placeholder</td>
          <td>Placeholder</td>
          <td>11 AM</td>
        </tr>
        <tr className="text-center h-12">
          <td>12 PM</td>
          <td>Placeholder</td>
          <td>Placeholder</td>
          <td>12 PM</td>
        </tr>
        <tr className="text-center h-12">
          <td>1 PM</td>
          <td>Placeholder</td>
          <td>Placeholder</td>
          <td>1 PM</td>
        </tr>
        <tr className="text-center  h-12">
          <td>2 PM</td>
          <td>Placeholder</td>
          <td>Placeholder</td>
          <td>2 PM</td>
        </tr>
        <tr className="text-center h-12">
          <td>3 PM</td>
          <td>Placeholder</td>
          <td>Placeholder</td>
          <td>3 PM</td>
        </tr>
        <tr className="text-center h-12">
          <td>4 PM</td>
          <td>Placeholder</td>
          <td>Placeholder</td>
          <td>4 PM</td>
        </tr>
        <tr className="text-center h-12">
          <td>5 PM</td>
          <td>Placeholder</td>
          <td>Placeholder</td>
          <td>5 PM</td>
        </tr>
        <tr className="text-center  h-12">
          <td>6 PM</td>
          <td>Placeholder</td>
          <td>Placeholder</td>
          <td>6 PM</td>
        </tr>
        <tr className="text-center h-12">
          <td>7 PM</td>
          <td>Placeholder</td>
          <td>Placeholder</td>
          <td>7 PM</td>
        </tr>
        <tr className="text-center h-12">
          <td>8 PM</td>
          <td>Placeholder</td>
          <td>Placeholder</td>
          <td>8 PM</td>
        </tr>
        <tr className="text-center h-12">
          <td>9 PM</td>
          <td>Placeholder</td>
          <td>Placeholder</td>
          <td>9 PM</td>
        </tr>
        <tr className="text-center h-12">
          <td>10 PM</td>
          <td>Placeholder</td>
          <td>Placeholder</td>
          <td>10 PM</td>
        </tr>
        <tr className="text-center h-12">
          <td>11 PM</td>
          <td>Placeholder</td>
          <td>Placeholder</td>
          <td>11 PM</td>
        </tr>
        <tr className="text-center h-12">
          <td>12 AM</td>
          <td>Placeholder</td>
          <td>Placeholder</td>
          <td>12 AM</td>
        </tr>
      </tbody>
    </table>
  );
};

interface TableRowWithModal {
  title: String;
  time: String;
  loc: String;
  desc: String;
}

const TableRowWithModal = ({ title, time, loc, desc }: TableRowWithModal) => {
  return (
    <button
      onClick={() => {
        const modal = document.getElementById(
          `modal_${title}`
        ) as HTMLDialogElement;
        if (modal) {
          modal.showModal();
        }
      }}
    >
      <dialog id={"modal_" + title} className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">{title}</h3>
          <p className="py-4">
            {time} @ {loc}
          </p>
          <p className="py-4">{desc}</p>
        </div>
      </dialog>
      <div className="">
        <div className="">{title}</div>
        <div className=" opacity-70">{loc}</div>
      </div>
    </button>
  );
};

export default ScheduleTable;
