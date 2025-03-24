import { IconWallet } from "./Icons";

function AvailableCredit() {
  return (
    <div className="ml-1 flex gap-2 bg-slate-400/15 group p-2 rounded-lg mb-2 items-center cursor-pointer group">
      <div className="bg-slate-400/15 p-1 rounded-md shadow-2xl">
        <IconWallet />
      </div>
      <div className="flex flex-col group-hover:text-slate-300">
        <span className="text-xs font-semibold">Available Credits</span>
        <span className="font-bold">222.10</span>
      </div>
    </div>
  );
}

export default AvailableCredit;
