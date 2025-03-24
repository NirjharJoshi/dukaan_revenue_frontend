import Card from "./Card";
import { IconArrowRight } from "./Icons";

function Overview() {
  return (
    <div>
      <h2 className="text-lg font-semibold tracking-wide">Overview</h2>
      <div className="mt-6 grid md:grid-cols-3 gap-4">
        <Card
          title="Next payout"
          amount="2,312.23"
          variant="primary"
          showAdditional
        >
          <div className="flex flex-nowrap gap-0.5 font-normal cursor-pointer text-sm">
            <a className="underline" href="#">
              23 orders
            </a>
            <div>
              <IconArrowRight />
            </div>
          </div>
        </Card>
        <Card title="Amount Pending" amount="92,312.20">
          <div className="flex flex-nowrap gap-0.5 font-normal cursor-pointer text-sm text-blue-800/90">
            <a className="underline" href="#">
              23 orders
            </a>
            <div>
              <IconArrowRight />
            </div>
          </div>
        </Card>
        <Card title="Amount Processed" amount="23,92,312.19"></Card>
      </div>
    </div>
  );
}

export default Overview;
