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
        (twMerge("table-auto w-full text-white"), inclusiveSans.className)
      }
      style={{ borderSpacing: "1rem", borderCollapse: "separate" }}
    >
      <thead className="text-white mb-10">
        <tr>
          <th className="px-8 w-[10%]"></th>
          <th className="h3 px-28 pb-10"></th>
          <th className="h3 px-28 pb-10"></th>
          <th className="h3 px-28 pb-10"></th>
          <th className="h3 px-28 pb-10"></th>
          <th className="px-8 w-[10%]"></th>
        </tr>
      </thead>
      <tbody className="divide-y text-white text-opacity-80">
        <tr className="text-center text-white">
          <td></td>
          <td colSpan={2} className="h3 pb-11">
            Saturday
          </td>
          <td colSpan={2} className="h3 pb-10">
            Sunday
          </td>
          <td></td>
        </tr>
        <tr className="text-center h-24 pt-10">
          <td>
            <span className=" text-opacity-40">8 AM</span>
          </td>
          <td></td>
          <td></td>
          <td
            rowSpan={1}
            colSpan={2}
            className=" bg-fuchsia-200 text-black w-full rounded-[1rem] "
          >
            <TableRowWithModal
              title={"Solar Rise Yoga"}
              time={"8 AM - 9 AM"}
              loc={"Ballroom"}
              desc={
                "Decompress with some early morning yoga. Let your body wake up and get ready for the great day ahead!"
              }
            />
          </td>
          <td>8 AM</td>
        </tr>

        <tr className="text-center h-24">
          <td>9 AM</td>
          <td></td>
          <td></td>
          <td
            rowSpan={1}
            colSpan={1}
            className=" bg-stone-200 text-black w-full rounded-[1rem]"
          >
            <TableRowWithModal
              title={"Breakfast"}
              time={"9 AM - 10 AM"}
              loc={"Ballroom"}
              desc={"Enjoy some breakfast from Big Blue Bagel & Deli!"}
            />
          </td>
          <td
            rowSpan={1}
            colSpan={1}
            className=" bg-lime-100 text-black w-full rounded-[1rem]"
          >
            <TableRowWithModal
              title={"Sleeping Room Closes"}
              time={"9:30 AM"}
              loc={"Sleeping Room"}
              desc={"Good morning hackers!"}
            />
          </td>
          <td>9 AM</td>
        </tr>
        <tr className="text-center  h-24">
          <td>10 AM</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td>10 AM</td>
        </tr>
        <tr className="text-center h-24">
          <td>11 AM</td>
          <td
            rowSpan={2}
            colSpan={1}
            className=" bg-lime-100 text-black w-full rounded-[1rem]"
          >
            <TableRowWithModal
              title={"Check-In"}
              time={"11 AM - 1 PM"}
              loc={"Second Floor Stairs"}
              desc={
                "Check-in will be at the top of the second floor stairs. There, you will get your badge, brochure, and punch card!"
              }
            />
          </td>
          <td
            rowSpan={1}
            colSpan={1}
            className=" bg-fuchsia-200 text-black w-full rounded-[1rem]"
          >
            <TableRowWithModal
              title={"Mocktail Social Hour"}
              time={"11 AM - 12 PM"}
              loc={"Ballroom"}
              desc={
                "Enjoy a mocktail as you get to know fellow participants! Feel free to talk to potential teammates if you haven’t made a team yet!"
              }
            />
          </td>
          <td
            rowSpan={1}
            colSpan={1}
            className=" bg-rose-200 text-black w-full rounded-[1rem]"
          >
            <TableRowWithModal
              title={"Soft Deadline"}
              time={"11 AM"}
              loc={"DevPost"}
              desc={
                "Project submission soft deadline! Remember to submit on DevPost!"
              }
            />
          </td>
          <td
            rowSpan={1}
            colSpan={1}
            className=" bg-stone-200 text-black w-full rounded-[1rem]"
          >
            <TableRowWithModal
              title={"Lunch"}
              time={"11:30 AM"}
              loc={"Ballroom"}
              desc={"Enjoy lunch from Jimmy John’s!"}
            />
          </td>
          <td>11 AM</td>
        </tr>
        <tr className="text-center h-24">
          <td>12 PM</td>
          <td
            rowSpan={1}
            colSpan={1}
            className=" bg-orange-200 text-black w-full rounded-[1rem]"
          >
            <TableRowWithModal
              title={"Opening Ceremony"}
              time={"12:00 PM"}
              loc={"Ballroom"}
              desc={
                "Join us as we welcome you to Auburn Hacks 2024! Hear all about the hackathon and our sponsors!"
              }
            />
          </td>
          <td
            rowSpan={1}
            colSpan={1}
            className=" bg-stone-200 text-black w-full rounded-[1rem]"
          >
            <TableRowWithModal
              title={"Lunch"}
              time={"12:30 PM"}
              loc={"Ballroom"}
              desc={"Enjoy some delicious Chick-fil-A for lunch!"}
            />
          </td>
          <td
            rowSpan={1}
            colSpan={1}
            className=" bg-rose-200 text-black w-full rounded-[1rem]"
          >
            <TableRowWithModal
              title={"Hard Deadline"}
              time={"12:00 PM"}
              loc={"DevPost"}
              desc={"Project submissions are DUE! Sumit on DevPost!"}
            />
          </td>
          <td>12 PM</td>
        </tr>
        <tr className="text-center h-24">
          <td>1 PM</td>
          <td
            rowSpan={1}
            colSpan={1}
            className=" bg-lime-100 text-black w-full rounded-[1rem]"
          >
            <TableRowWithModal
              title={"Hacking Begins!"}
              time={"1 PM"}
              loc={""}
              desc={
                "Hackers, best of luck! We look forward to seeing the innovative projects you develop!"
              }
            />
          </td>
          <td
            rowSpan={1}
            colSpan={1}
            className=" bg-lime-100 text-black w-full rounded-[1rem]"
          >
            <TableRowWithModal
              title={"Team Formation"}
              time={"12:30-1:00 PM"}
              loc={"Ballroom"}
              desc={"If you don't have a team, make sure you join one!"}
            />
          </td>
          <td
            rowSpan={1}
            colSpan={2}
            className=" bg-lime-100 text-black w-full rounded-[1rem]"
          >
            <TableRowWithModal
              title={"Exposition"}
              time={"12:30-2:00 PM"}
              loc={"Ballroom"}
              desc={"Judging begins! It’s time to show off all your hard work!"}
            />
          </td>
          <td>1 PM</td>
        </tr>
        <tr className="text-center  h-24">
          <td>2 PM</td>
          <td
            rowSpan={1}
            colSpan={1}
            className=" bg-fuchsia-100 text-black w-full rounded-[1rem]"
          >
            <TableRowWithModal
              title={"DrawSync"}
              time={"1:30-2:30 PM"}
              loc={"Workshop Room 1"}
              desc={
                "Lorissa Algarin, our Operations Director, will be presenting a team building challenge. Stop by to have some fun and get to know your new teammates!"
              }
            />
          </td>
          <td
            rowSpan={1}
            colSpan={1}
            className=" bg-sky-200 text-black w-full rounded-[1rem]"
          >
            <TableRowWithModal
              title={"Intro to Python"}
              time={"2:00-3:00 PM"}
              loc={"Workshop Room 2"}
              desc={
                "Are you new to Python? Maybe looking to pick up another programming language? If so, please stop by the Intro to Python Workshop presented by Garrett Scott, the Auburn ACM Technical Interview Association President."
              }
            />
          </td>
          <td
            rowSpan={1}
            colSpan={2}
            className=" bg-orange-200 text-black w-full rounded-[1rem]"
          >
            <TableRowWithModal
              title={"Closing Ceremony"}
              time={"2:30-3:00 PM"}
              loc={"Ballroom"}
              desc={
                "Thank you all for participating in the 2024 Auburn Hackathon! We loved seeing all of your creations and hope you'll join us next year!"
              }
            />
          </td>
          <td>2 PM</td>
        </tr>
        <tr className="text-center h-24">
          <td>3 PM</td>
          <td
            rowSpan={1}
            colSpan={2}
            className=" bg-sky-200 text-black w-full rounded-[1rem]"
          >
            <TableRowWithModal
              title={"Intro to Git"}
              time={"3:00-4:00 PM"}
              loc={"Workshop Room 1"}
              desc={
                "Are you new to git or GitHub? Do you have no idea what git is? If so, please attend the Intro to GitHub Workshop presented by Matthew Freestone, Auburn Hacks 2023 Winner and current Auburn ACM President!"
              }
            />
          </td>
          <td></td>
          <td></td>
          <td>3 PM</td>
        </tr>
        <tr className="text-center h-24">
          <td>4 PM</td>
          <td
            rowSpan={1}
            colSpan={2}
            className=" bg-violet-200 text-black w-full rounded-[1rem]"
          >
            <TableRowWithModal
              title={"Southwest Research Institute Tech Talk"}
              time={"4:00-5:00 PM"}
              loc={"Workshop Room 2"}
              desc={
                "Southwest Research Institute (SwRI) is a premier independent, non-profit applied research and development organization headquartered in San Antonio, Texas. Stop by to learn more about SwRI!"
              }
            />
          </td>
          <td></td>
          <td></td>
          <td>4 PM</td>
        </tr>
        <tr className="text-center h-24">
          <td>5 PM</td>
          <td
            rowSpan={1}
            colSpan={2}
            className=" bg-stone-200 text-black w-full rounded-[1rem]"
          >
            <TableRowWithModal
              title={"Dinner"}
              time={"5:30-6:30 PM"}
              loc={"Ballroom"}
              desc={"Stop by for some delicious dinner from Moe’s Southwest!"}
            />
          </td>
          <td></td>
          <td></td>
          <td>5 PM</td>
        </tr>
        <tr className="text-center  h-24">
          <td>6 PM</td>
          <td
            rowSpan={1}
            colSpan={2}
            className=" bg-sky-200 text-black w-full rounded-[1rem]"
          >
            <TableRowWithModal
              title={"Soroban"}
              time={"6:00-7:00 PM"}
              loc={"Workshop Room 1"}
              desc={
                "Stop by for a workshop from MLH on Soroban! Soroban is an open-source Rust-based developer-friendly smart contracts platform built for scalability. With Soroban, developers have the freedom to create applications as borderless as the internet."
              }
            />
          </td>
          <td></td>
          <td></td>
          <td>6 PM</td>
        </tr>
        <tr className="text-center h-24">
          <td>7 PM</td>
          <td
            rowSpan={1}
            colSpan={1}
            className=" bg-sky-200 text-black w-full rounded-[1rem]"
          >
            <TableRowWithModal
              title={"DNS, PKI, and TLS Certifications "}
              time={"7:00-8:00 PM"}
              loc={"Workshop Room 2"}
              desc={
                "Interested in cybersecurity? If so, stop by this workshop from Tyler Ray, the Auburn ACM Ethical Hacking Club President!"
              }
            />
          </td>
          <td
            rowSpan={1}
            colSpan={1}
            className=" bg-fuchsia-200 text-black w-full rounded-[1rem]"
          >
            <TableRowWithModal
              title={"Bob Ross MS Paint Along"}
              time={"7:30-8:30 PM"}
              loc={"Workshop Room 1"}
              desc={
                "Get creative with a relaxing Bob Ross tutorial using Microsoft Paint!"
              }
            />
          </td>
          <td></td>
          <td></td>
          <td>7 PM</td>
        </tr>
        <tr className="text-center h-24">
          <td>8 PM</td>
          <td
            rowSpan={1}
            colSpan={2}
            className=" bg-sky-200 text-black w-full rounded-[1rem]"
          >
            <TableRowWithModal
              title={"Intro to UX/UI and Web Dev"}
              time={"8:00-9:00 PM"}
              loc={"Workshop Room 2"}
              desc={
                "Curious about the world of UI/UX design? What about web dev? If so, stop by this workshop presented by Cady Pridgeon and Jordan Lee, current Auburn Hacks Tech Team Members!"
              }
            />
          </td>
          <td></td>
          <td></td>
          <td>8 PM</td>
        </tr>
        <tr className="text-center h-24">
          <td>9 PM</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td>9 PM</td>
        </tr>
        <tr className="text-center h-24">
          <td>10 PM</td>
          <td
            rowSpan={2}
            colSpan={1}
            className=" bg-fuchsia-200 text-black w-full rounded-[1rem] p-4"
          >
            <TableRowWithModal
              title={"Party on the Dark Side of the Moon"}
              time={"10:00 PM-12:00 AM"}
              loc={"Ballroom"}
              desc={
                "Let lose with some Just Dance at the Party on the Dark Side of the Moon!"
              }
            />
          </td>
          <td
            rowSpan={1}
            colSpan={1}
            className=" bg-stone-200 text-black w-full rounded-[1rem]"
          >
            <TableRowWithModal
              title={"Late Night Snack"}
              time={"10:00-11:00 PM"}
              loc={"Ballroom"}
              desc={"Enjoy a late night snack from Domino’s Pizza!"}
            />
          </td>
          <td></td>
          <td></td>
          <td>10 PM</td>
        </tr>
        <tr className="text-center h-24">
          <td>11 PM</td>
          <td
            rowSpan={1}
            colSpan={1}
            className=" bg-lime-100 text-black w-full rounded-[1rem]"
          >
            <TableRowWithModal
              title={"Sleeping Room Opens"}
              time={"11:00 PM"}
              loc={"Sleeping Room"}
              desc={
                "If you need to take some time to rest from your project, you are welcome to sleep and decompress in this quiet, sleeping space."
              }
            />
          </td>
          <td></td>
          <td></td>
          <td>11 PM</td>
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
    <div
      onClick={() => {
        const modal = document.getElementById(
          `modal_${title}`
        ) as HTMLDialogElement;
        if (modal) {
          modal.showModal();
        }
      }}
      className="hover:cursor-pointer"
    >
      <dialog id={"modal_" + title} className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">{title}</h3>
          <p className="py-4">
            {time} @ {loc}
          </p>
          <p className="py-4">{desc}</p>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
      <div className="">
        <div className="">{title}</div>
        <div className=" opacity-70">{loc}</div>
      </div>
    </div>
  );
};

export default ScheduleTable;
