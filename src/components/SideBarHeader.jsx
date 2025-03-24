import { IconArrowDown } from "./Icons";

export default function SideBarHeader() {
  return (
    <div className="flex items-center gap-3 text-slate-100">
      <img
        className="size-12 rounded-md"
        src="https://avatars.githubusercontent.com/u/97777600?v=4"
      />
      <div className="grow">
        <h5 className=" font-semibold">Nirjhar</h5>
        <a className="text-slate-400 underline" href="#">
          Visit store
        </a>
      </div>
      <IconArrowDown strokeWidth={2} />
    </div>
  );
}
