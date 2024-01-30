import ScheduleTable from "@/components/ScheduleTable";

export default function Schedule() {
  return (
    <div className="flex min-h-screen flex-col items-center p-24">
      <h1 className="h1 mt-[6rem]">Schedule</h1>

      <div className="mt-[4rem] max-w-6xl">
        <ScheduleTable />
        {/* <div className="grid grid-rows-16 grid-flow-col auto-cols-max text-white text-center divide-y">
          <div className="px-4">9</div>
          <div>10</div>
          <div>11</div>
          <div>12</div>
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
          <div>6</div>
          <div>7</div>
          <div>8</div>
          <div>9</div>
          <div>10</div>
          <div>11</div>
          <div>12</div>
          <div className="row-span-2 bg-yellow-100 text-black grid place-content-center w-full px-48">
            <div className="">Check-In</div>
          </div>
        </div> */}
      </div>
      {/* <td
                rowSpan={2}
                className="bg-yellow-100 text-black w-full rounded-md px-48"
              >
                {" "}
                <div className="">
                  <div className="">Check-In</div>
                </div>
              </td> */}
    </div>
  );
}
