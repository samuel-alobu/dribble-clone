import HeroItems from "./HeroItems";
import { heroMenu } from "./data/hero";
import { SlArrowDown } from "react-icons/sl";
import { PiMagnifyingGlassLight } from "react-icons/pi";

function Hero() {
  return (
    <div>
      <div className="mt-8 text-center font-mona-sans">
        <h1 className="text-7xl font-medium leading-tight">
          Discover the world’s <br />
          top designers
        </h1>
        <h4 className="text-xl font-light mt-6 leading-snug">
          Explore work from the most talented and accomplished designers <br />
          ready to take on your next project
        </h4>
      </div>
      <div className=" bg-gray-50 flex gap-4 justify-between items-center mx-auto mt-8 p-2 border-gray-300 w-5xl rounded-4xl hover:border-2 hover:border-purple-300 transition-all duration-100">
        <input
          className="group-hover:bg-gray-100 px-6 py-4 outline-none border-none w-full items-center placeholder:font-mona-sans placeholder:text-lg"
          type="text"
          placeholder="What are you looking for"
        />

        <div className="flex items-center gap-2 hover:opacity-50">
          <p className="font-mona-sans font-medium">Shots</p>
          <SlArrowDown />
        </div>
        <div className="bg-orange-400 hover:bg-orange-300 rounded-4xl p-5">
          <PiMagnifyingGlassLight />
        </div>
      </div>
      <div className="w-full lg:w-3/5 mx-auto flex items-center gap-4 my-5 justify-between">
        <p className="font-mona-sans opacity-50 text-lg">Trending searches</p>
        {heroMenu.map((item) => {
          return <HeroItems key={item.id} name={item.name} />;
        })}
      </div>
    </div>
  );
}

export default Hero;
