import React, { useEffect } from "react";
import { GifState } from "../context/gif-context";
import Gif from "../components/Gif";

const Home = () => {
  const { gf, gifs, setGifs, filter, setFilter } = GifState();

  const fetchGif = async () => {
    const { data } = await gf.trending({
      limit: 20,
      type: filter,
      rating: "g",
    });
    setGifs(data);
  };

  useEffect(() => {
    fetchGif();
  }, [filter]);
  return (
    <div>
      <img src=".././public/banner.gif" className="w-full rounded mt-2" />

      <div className="columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-2">
        {gifs?.map((gif) => {
          return <Gif key={gif.title} gifs={gif} />;
        })}
      </div>
    </div>
  );
};

export default Home;
