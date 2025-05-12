import { useState } from "react";
import Designer from "./Designer";
import Explore from "./Explore";

function NavbarItem({ name, icon }: { name: string; icon: React.ReactNode }) {
  const [showItems, setShowItems] = useState(false);
  return (
    <div
      className="flex items-center gap-2 text-lg font-[600] hover:text-gray-600"
      onMouseOver={() => setShowItems(!showItems)}
    >
      <a className="" href="#">
        {name}
      </a>
      {icon}
      {showItems ? (
        <div className="hidden absolute mt-3 border-[1px] border-gray-700 p-3 px-5 py-4">
          <Explore />
        </div>
      ) : null}
      <div className="hidden absolute mt-3 border-[1px] border-gray-700 p-3 px-5 py-4">
        <Designer />
      </div>
    </div>
  );
}

export default NavbarItem;
