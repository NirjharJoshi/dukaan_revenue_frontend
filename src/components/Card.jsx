import { IconQuestion } from "./Icons";

function Card({
  showAdditional = false,
  variant = "default",
  title = "",
  amount = "",
  children,
}) {
  const variants = {
    default: "bg-slate-100 text-slate-800 shadow-lg",
    primary: "bg-blue-800/90 text-slate-200",
  };

  const style = variants[variant];
  return (
    <div className=" rounded-sm overflow-hidden">
      <div className={"p-5 flex flex-col gap-4 " + style}>
        <div className="flex gap-2">
          <h4 className=" tracking-wide font-light">{title}</h4>
          <div className="grid place-items-center">
            <IconQuestion />
          </div>
        </div>
        <div className="flex justify-between items-center flex-nowrap">
          <div className="font-semibold text-xl xl:text-4xl">
            <span className="mr-1">₹</span>
            <span>{amount}</span>
          </div>
          {children}
        </div>
      </div>
      {showAdditional && (
        <div className="bg-blue-950/90 px-5 py-2 text-xs flex flex-nowrap justify-between text-slate-200">
          <span>Next payout date:</span>
          <span>Today, 04:00 PM</span>
        </div>
      )}
    </div>
  );
}

export default Card;
