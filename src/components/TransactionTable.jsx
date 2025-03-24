import { IconArrowUpDown, IconDownload } from "./Icons";
import InputSearch from "./InputSearch";
import OrderTable from "./OrderTable";

function TransactionTable() {
  return (
    <div className="mt-6 bg-slate-100 rounded-md p-3">
      <div className="flex flex-nowrap justify-between items-center">
        <div>
          <InputSearch
            variant="transparent"
            placeholder={"Order ID or transaction ID"}
          />
        </div>
        <div className="flex flex-nowrap gap-3">
          <div className="flex flex-nowrap gap-2 rounded-sm border-1 border-slate-400/70 p-2">
            <span>Sort</span>
            <span className="text-slate-600/90">
              <IconArrowUpDown />
            </span>
          </div>
          <div className="border-1 border-slate-400/70 text-slate-600/90 self-center rounded-sm p-2">
            <IconDownload />
          </div>
        </div>
      </div>
      <OrderTable />
    </div>
  );
}

export default TransactionTable;
