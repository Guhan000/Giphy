import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HiEllipsisVertical } from "react-icons/hi2";
import { HiMiniBars3BottomLeft } from "react-icons/hi2";
import { GifState } from "../context/gif-context";

const Header = () => {
  const [showCategories, setShowCategories] = useState(false);
  const [categories, setCategories] = useState([]);

  const { gf, filter, setFilter, favourites } = GifState();
  const fetchCategories = async () => {
    const { data } = await gf.categories();
    setCategories(data);
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <nav>
      <div className="relative flex justify-between items-center mb-2">
        <Link to="/" className="flex gap-8">
          <img className="w-8" src="../public/logo.svg" alt="Giphy Icon" />
          <div className="text-5xl text-bold cursor-pointer tracking-tight">
            GIPHY
          </div>
        </Link>
        <div className="text-md font-bold flex gap-2 items-center">
          {categories &&
            categories?.slice(0, 5)?.map((category) => {
              return (
                <Link
                  to={`${category.name_encoded}`}
                  key={category.name}
                  className="px-4 py-1 hover:gradient border-b-4 hidden lg:block"
                >
                  {category.name}
                </Link>
              );
            })}

          <button onClick={() => setShowCategories(!showCategories)}>
            <HiEllipsisVertical
              size={35}
              className={`py-0.5 hover:gradient ${
                showCategories ? "gradient" : ""
              } border-b-4 hidden lg:block`}
            />
          </button>

          {favourites.length > 0 && (
            <button>
              <Link to="/favourite" className="bg-gray-500 rounded px-4 py-2">
                Favourite GIFs
              </Link>
            </button>
          )}

          <button>
            <HiMiniBars3BottomLeft
              className="text-sky-400 block lg:hidden"
              size={30}
            />
          </button>
        </div>

        {showCategories && (
          <div className="absolute right-0 top-14 px-6 pt-6 pb-9 w-full gradient z-20">
            <span className="text-3xl font-extrabold">Categories</span>
            <hr className="text-gray-100 opacity-50 my-5"/>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
              {categories?.map((category) => {
                return <Link key={category.name} to={`/${category.name_encoded}`} className="font-bold">{category.name}</Link>
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
