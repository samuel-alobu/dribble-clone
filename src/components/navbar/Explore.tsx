import ExploreItems from "./ExploreItems";
import { exploreProps } from "./data/explore";

function Explore() {
  return (
    <div className="hidden md:block">
      {exploreProps.map((item) => {
        const Icon = item?.icon;
        const Name = item.name;
        return (
          <ExploreItems key={item.id} name={Name} icon={Icon && <Icon />} />
        );
      })}
    </div>
  );
}

export default Explore;
