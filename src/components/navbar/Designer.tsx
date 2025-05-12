import { designerProps } from "./data/designer";
import DesignerItems from "./DesignerItems";

function Designer() {
  return (
    <div className="hidden md:block">
      {designerProps.map((item) => {
        const Icon = item?.icon;
        const Name = item.name;
        return (
          <DesignerItems key={item.id} name={Name} icon={Icon && <Icon />} />
        );
      })}
    </div>
  );
}

export default Designer;
