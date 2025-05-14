function HeroItems({ name }: { name: string }) {
  return (
    <div className="rounded-3xl py-1.5 px-4 w-full text-center font-mona-sans lowercase font-medium bg-gray-50 hover:bg-gray-200 cursor-pointer">
      <a className="" href="#">
        {name}
      </a>
    </div>
  );
}

export default HeroItems;
