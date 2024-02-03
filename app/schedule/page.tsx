import ScheduleTable from "@/components/ScheduleTable";

export default function Schedule() {
  return (
    <div className="flex min-h-screen flex-col items-center p-24">
      <h1 className="h1 mt-[6rem]">Schedule</h1>

      <div className=" max-w-6xl">
        <ScheduleTable />
      </div>
    </div>
  );
}
