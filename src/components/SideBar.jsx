import AvailableCredit from "./AvailableCredit";
import {
  IconAnalytics,
  IconAppearance,
  IconAudience,
  IconClose,
  IconDelivery,
  IconDiscount,
  IconHome,
  IconMarketing,
  IconOrder,
  IconPayout,
  IconPlugin,
  IconProduct,
} from "./Icons";
import Link from "./Link";
import SideBarHeader from "./SideBarHeader";

const navs = [
  {
    icon: IconHome,
    title: "Home",
    href: "#",
  },
  {
    icon: IconOrder,
    title: "Orders",
    href: "#",
  },
  {
    icon: IconProduct,
    title: "Products",
    href: "#",
  },
  {
    icon: IconDelivery,
    title: "Delivery",
    href: "#",
  },
  {
    icon: IconMarketing,
    title: "Marketing",
    href: "#",
  },
  {
    icon: IconAnalytics,
    title: "Analytics",
    href: "#",
  },
  {
    icon: IconPayout,
    title: "Payouts",
    href: "#",
  },
  {
    icon: IconDiscount,
    title: "Discounts",
    href: "#",
  },
  {
    icon: IconAudience,
    title: "Audience",
    href: "#",
  },
  {
    icon: IconAppearance,
    title: "Appearance",
    href: "#",
  },
  {
    icon: IconPlugin,
    title: "Plugin",
    href: "#",
  },
];

function SideBar({ open, setOpen }) {
  if (open) {
    return (
      <div className="h-full flex flex-col w-3xs px-3 py-2 overflow-y-scroll bg-indigo-950 text-slate-400 absolute top-0 left-0 z-10">
        <div className="flex flex-nowrap items-center gap-1">
          <div className="grow">
            <SideBarHeader />
          </div>
          <div
            className="text-slate-100 p-1 bg-blue-900/30 rounded-lg cursor-pointer"
            onClick={() => setOpen(false)}
          >
            <IconClose />
          </div>
        </div>
        <div className="my-8 ml-1 grow">
          {navs.map((nav, i) => (
            <Link
              key={i}
              icon={<nav.icon />}
              title={nav.title}
              href={nav.href}
            />
          ))}
        </div>
        <AvailableCredit />
      </div>
    );
  }
  return (
    <div className="h-full lg:flex flex-col w-[22%] max-w-3xs px-3 py-2 overflow-y-scroll bg-indigo-950 text-slate-400 hidden ">
      <SideBarHeader />
      <div className="my-8 ml-1 grow">
        {navs.map((nav, i) => (
          <Link key={i} icon={<nav.icon />} title={nav.title} href={nav.href} />
        ))}
      </div>
      <AvailableCredit />
    </div>
  );
}

export default SideBar;
