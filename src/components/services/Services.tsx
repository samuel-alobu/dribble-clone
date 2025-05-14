import { SlArrowDown } from "react-icons/sl";
import { servicesMenu } from "./data/services";
import ServicesItems from "./ServicesItems";
import { IoFilterOutline } from "react-icons/io5";
import { useEffect, useState } from "react";
import type { UnsplashImage } from "../services/types/UnsplashImage";

const ACCESS_KEY = "UU3guL5czaiM52ruVIl6xJbVXLw7Q7vJB6sCXXAYz90";

function Services() {
  const [images, setImages] = useState<UnsplashImage[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const res = await fetch(
          `https://api.unsplash.com/photos/random?count=44&client_id=${ACCESS_KEY}`
        );
        if (!res.ok) throw new Error("Failed to fetch images");
        const data: UnsplashImage[] = await res.json();
        setImages(data);
      } catch (err) {
        console.error("Error fetching images:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  return (
    <div className="w-full lg:w-3/5 mx-auto">
      <div className="flex">
        {" "}
        <div className="flex absolute left-30 items-center gap-4 hover:opacity-50 p-4 rounded-2xl hover:shadow-lg transition-shadow duration-200">
          <p className="font-mona-sans font-medium">Popular</p>
          <SlArrowDown />
        </div>
        <p className="font-mona-sans rounded-3xl py-1.5 px-4 w-full text-center font-bold bg-gray-50 hover:bg-gray-200 cursor-pointer text-lg">
          Discover
        </p>
        {servicesMenu.map((item) => {
          return <ServicesItems key={item.id} name={item.name} />;
        })}
        <div className="flex absolute right-30 items-center gap-4 p-3 rounded-3xl hover:shadow-xl transition-shadow duration-200">
          <IoFilterOutline />
          <p className="font-mona-sans font-medium">Filter</p>
        </div>
      </div>
      <div className="">
        {loading ? (
          <p className="text-center">Loading images...</p>
        ) : (
          <div className="flex flex-wrap">
            {images.map((img) => (
              <div
                key={img.id}
                className="w-full h-50 gap-6 object-cover md:w-1/3"
              >
                <img
                  src={img.urls.small}
                  alt={img.alt_description || "Unsplash Image"}
                  className=""
                />
                <div className="">
                  <p className="">
                    Photo by{" "}
                    <a
                      href={img.user.links.html}
                      target="_blank"
                      rel="noopener noreferrer"
                      className=""
                    >
                      {img.user.name}
                    </a>
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Services;
