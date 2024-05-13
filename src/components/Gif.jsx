import React from "react";
import { Link } from "react-router-dom";

const Gif = ({ gifs, hover = true }) => {
  return (
    <Link to={`/${gifs.type}/${gifs.slug}`}>
      <div className="w-full mb-2 relative cursor-pointer group aspect-video">
        <img
          src={gifs?.images?.fixed_width?.webp}
          alt={gifs?.title}
          className="w-full rounded object-cover transition-all duration-300"
        />
        {hover && (
          <div className="absolute inset-0 rounded opacity-0 group-hover:opacity-100 bg-gradient-to-b start-transparent to-black font-bold via-transparent flex gap-2 items-end p-2">
            <img
              src={gifs?.user?.avatar_url}
              alt={gifs?.user?.display_name}
              className="h-8"
            />
            <span>{gifs?.user?.display_name}</span>
          </div>
        )}
      </div>
    </Link>
  );
};

export default Gif;
