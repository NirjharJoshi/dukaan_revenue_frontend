import { Successful } from "./Status";

const orderData = [
  {
    id: 281209,
    status: "Successful",
    transactionID: "131634495747",
    refundDate: "Today, 08:45 PM",
    amount: "₹1,125.00",
  },
  {
    id: 281208,
    status: "Processing",
    transactionID: "131634495747",
    refundDate: "Yesterday, 8:45 PM",
    amount: "₹1,125.00",
  },
  {
    id: 281207,
    status: "Failed",
    transactionID: "131634495747",
    refundDate: "12 Jul 2023, 3:00 PM",
    amount: "₹1,125.00",
  },
  {
    id: 281206,
    status: "Successful",
    transactionID: "131634495747",
    refundDate: "12 Jul 2023, 3:00 PM",
    amount: "₹1,125.00",
  },
  {
    id: 281205,
    status: "Processing",
    transactionID: "131634495747",
    refundDate: "12 Jul 2023, 3:00 PM",
    amount: "₹1,125.00",
  },
  {
    id: 281204,
    status: "Failed",
    transactionID: "131634495747",
    refundDate: "12 Jul 2023, 1:00 PM",
    amount: "₹1,125.00",
  },
  {
    id: 281203,
    status: "Successful",
    transactionID: "131634495747",
    refundDate: "11 Jul 2023, 3:00 PM",
    amount: "₹1,125.00",
  },
  {
    id: 281202,
    status: "Successful",
    transactionID: "131634495747",
    refundDate: "11 Jul 2023, 3:00 PM",
    amount: "₹1,125.00",
  },
  {
    id: 281201,
    status: "Failed",
    transactionID: "131634495747",
    refundDate: "11 Jul 2023, 3:00 PM",
    amount: "₹1,125.00",
  },
  {
    id: 281200,
    status: "Successful",
    transactionID: "131634495747",
    refundDate: "10 Jul 2023, 3:00 PM",
    amount: "₹1,125.00",
  },
  {
    id: 281199,
    status: "Successful",
    transactionID: "131634495747",
    refundDate: "10 Jul 2023, 3:00 PM",
    amount: "₹1,125.00",
  },
  {
    id: 281198,
    status: "Failed",
    transactionID: "131634495747",
    refundDate: "10 Jul 2023, 3:00 PM",
    amount: "₹1,125.00",
  },
  {
    id: 281197,
    status: "Successful",
    transactionID: "131634495747",
    refundDate: "9 Jul 2023, 3:00 PM",
    amount: "₹1,125.00",
  },
  {
    id: 281196,
    status: "Successful",
    transactionID: "131634495747",
    refundDate: "9 Jul 2023, 3:00 PM",
    amount: "₹1,125.00",
  },
  {
    id: 281195,
    status: "Failed",
    transactionID: "131634495747",
    refundDate: "9 Jul 2023, 3:00 PM",
    amount: "₹1,125.00",
  },
  {
    id: 281194,
    status: "Successful",
    transactionID: "131634495747",
    refundDate: "8 Jul 2023, 3:00 PM",
    amount: "₹1,125.00",
  },
  {
    id: 281193,
    status: "Successful",
    transactionID: "131634495747",
    refundDate: "8 Jul 2023, 3:00 PM",
    amount: "₹1,125.00",
  },
  {
    id: 281192,
    status: "Failed",
    transactionID: "131634495747",
    refundDate: "8 Jul 2023, 3:00 PM",
    amount: "₹1,125.00",
  },
  {
    id: 281191,
    status: "Successful",
    transactionID: "131634495747",
    refundDate: "7 Jul 2023, 3:00 PM",
    amount: "₹1,125.00",
  },
  {
    id: 281190,
    status: "Successful",
    transactionID: "131634495747",
    refundDate: "7 Jul 2023, 3:00 PM",
    amount: "₹1,125.00",
  },
  {
    id: 281189,
    status: "Failed",
    transactionID: "131634495747",
    refundDate: "7 Jul 2023, 3:00 PM",
    amount: "₹1,125.00",
  },
  {
    id: 281188,
    status: "Successful",
    transactionID: "131634495747",
    refundDate: "6 Jul 2023, 3:00 PM",
    amount: "₹1,125.00",
  },
  {
    id: 281187,
    status: "Successful",
    transactionID: "131634495747",
    refundDate: "6 Jul 2023, 3:00 PM",
    amount: "₹1,125.00",
  },
  {
    id: 281186,
    status: "Successful",
    transactionID: "131634495747",
    refundDate: "6 Jul 2023, 3:00 PM",
    amount: "₹1,125.00",
  },
];

function OrderTable() {
  return (
    <div className="mt-6 w-full xl:px-12">
      <table className="flex flex-col gap-2">
        <thead>
          <tr className="*:text-xs md:*:text-sm grid grid-cols-5 justify-items-start w-full gap-2 *:font-semibold *:uppercase text-slate-800/90 tracking-tighter md:tracking-normal">
            <th>order id</th>
            <th>status</th>
            <th>transaction id</th>
            <th>refund date</th>
            <th className="justify-self-end">order amount</th>
          </tr>
        </thead>
        <tbody>
          {orderData.map((order) => (
            <tr className="*:text-xs md:*:text-sm grid grid-cols-5 justify-items-start w-full gap-2 border-b-1 border-slate-300 py-4">
              <td className="text-blue-800/90 font-semibold">#{order.id}</td>
              <td className="capitalize">
                {order.status === "Successful" && (
                  <span className="size-2 bg-green-500 rounded-full inline-block mr-1.5"></span>
                )}
                {order.status === "Processing" && (
                  <span className="size-2 bg-slate-500 rounded-full inline-block mr-1.5"></span>
                )}
                {order.status === "Failed" && (
                  <span className="size-2 bg-red-500 rounded-full inline-block mr-1.5"></span>
                )}
                {order.status}
              </td>
              <td className="text-slate-700">{order.transactionID}</td>
              <td className="text-slate-700">{order.refundDate}</td>
              <td className="justify-self-end">{order.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default OrderTable;
