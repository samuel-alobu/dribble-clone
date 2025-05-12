import { BsFilterLeft } from "react-icons/bs";
import { FiX } from "react-icons/fi";
import logo from "../../assets/images/Dribbble-Logo.jpg";
import { menu } from "./data/navbar";
import NavbarItem from "./NavbarItem";
function Navbar() {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center">
        <div className="">
          <BsFilterLeft className="flex text-5xl ml-4 mb-20 mr-0.5 cursor-pointer lg:hidden" />
        </div>
        <div className="hidden">
          <FiX />
        </div>
        <img
          src={logo}
          alt="dribble-logo"
          className="w-[110px] mt-8 cursor-pointer hover:opacity-80 ml-15 mb-15"
        />
        <div className="flex items-center gap-10 ml-30 mb-5 justify-between">
          {menu.map((item) => {
            const Icon = item?.icon;
            const Name = item.name;
            return (
              <NavbarItem key={item.id} name={Name} icon={Icon && <Icon />} />
            );
          })}
        </div>
        <div className="sm:hidden lg:block gap-8 ">
          {menu.map((item, index) => {
            const Icon = item?.icon;
            const Name = item.name;
            return (
              index < 0 && (
                <NavbarItem key={item.id} name={Name} icon={Icon && <Icon />} />
              )
            );
          })}
        </div>
      </div>
      <div className="pb-5 pr-10">
        <button className="text-black hover:text-gray-700 cursor-pointer font-bold py-2 px-4">
          Sign up
        </button>
        <button className="bg-gray-800 hover:bg-gray-700 text-white font-bold p-4 w-30 rounded-[40px] cursor-pointer">
          Log in
        </button>
      </div>
    </div>
  );
}

export default Navbar;
