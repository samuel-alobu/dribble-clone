function ServicesItems({ name }: { name: string }) {
  return (
    <div className="rounded-3xl py-1.5 px-4 w-full text-center font-mona-sans font-bold hover:opacity-50 cursor-pointer">
      <a className="" href="#">
        {name}
      </a>
    </div>
  );
}

export default ServicesItems;
