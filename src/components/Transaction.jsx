import TransactionTable from "./TransactionTable";

function Transaction() {
  return (
    <div className="mt-6">
      <h2 className="text-lg font-semibold tracking-wide">
        Transactions | This Month
      </h2>
      <div className="flex flex-nowrap gap-3 mt-6">
        <div className="bg-slate-400/60 px-3 py-2 rounded-3xl text-slate-600/80">
          Payouts (22)
        </div>
        <div className="bg-blue-800/90 text-slate-200 px-4 py-2 rounded-3xl">
          Refunds (6)
        </div>
      </div>
      <TransactionTable />
    </div>
  );
}

export default Transaction;
