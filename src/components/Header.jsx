import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiEllipsisVertical } from "react-icons/hi2";
import { HiMiniBars3BottomLeft } from "react-icons/hi2";

const Header = () => {
  const [showCategories, setShowCategories] = useState(false);
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
          <Link className="px-4 py-1 hover:gradient border-b-4 hidden lg:block">
            Categories
          </Link>
          <button onClick={() => setShowCategories(!showCategories)}>
            <HiEllipsisVertical
              size={35}
              className={`py-0.5 hover:gradient ${
                showCategories ? "gradient" : ""
              } border-b-4 hidden lg:block`}
            />
          </button>

          <button>
            <Link to="/favourite" className="bg-gray-500 rounded px-4 py-2">
              Favourite GIFs
            </Link>
          </button>

          <button>
            <HiMiniBars3BottomLeft
              className="text-sky-400 block lg:hidden"
              size={30}
            />
          </button>
        </div>

        {showCategories && (
          <div className="absolute right-0 top-14 px-6 pb-9 w-full gradient z-20">
            <span>categories</span>
            <hr />
            <div>
              <Link to="">reactions</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
