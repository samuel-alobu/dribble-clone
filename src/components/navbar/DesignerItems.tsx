function DesignerItems({
  name,
  icon,
}: {
  name: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="shadow">
      {icon}
      <a className="" href="#">
        {name}
      </a>
    </div>
  );
}

export default DesignerItems;
