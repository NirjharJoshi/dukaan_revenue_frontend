import HeaderButton from "./HeaderButton";
import { IconMenu, IconQuestion } from "./Icons";
import { IconFillArrowDown, IconFillMessage } from "./IconsFill";

import InputSearch from "./InputSearch";

function Header({ setOpen }) {
  function handleClick() {
    setOpen(true);
  }
  return (
    <div className="flex flex-nowrap items-center h-16 shadow-sm bg-slate-100 justify-between px-5">
      <div className="block lg:hidden cursor-pointer" onClick={handleClick}>
        <IconMenu />
      </div>
      <div className="flex flex-nowrap gap-3 items-center">
        <h2 className="text-xl font-semibold">Payouts</h2>
        <div className="hidden md:flex flex-nowrap gap-1 text-sm items-center text-slate-500">
          <IconQuestion />
          <span>How it works</span>
        </div>
      </div>
      <InputSearch placeholder={"Search feature, tutorials, etc."} />
      <div className="flex flex-nowrap gap-2 md:gap-4">
        <HeaderButton>
          <IconFillMessage />
        </HeaderButton>
        <HeaderButton>
          <IconFillArrowDown />
        </HeaderButton>
      </div>
    </div>
  );
}

export default Header;
