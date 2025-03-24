import SideBar from "./SideBar";
import Header from "./Header";
import Order from "../pages/Order";
import Footer from "./Footer";
import { useState } from "react";

function AppLayout() {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex flex-nowrap h-full">
      <SideBar open={open} setOpen={setOpen} />
      <div className="grow overflow-y-scroll">
        <Header setOpen={setOpen} />
        <Order />
        <div className="flex justify-center">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default AppLayout;
