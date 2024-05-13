import { createContext, useContext, useState } from "react";
import { GiphyFetch } from '@giphy/js-fetch-api';

const GifContext = createContext();

const GifProvider = ({children}) => {

    const [gifs, setGifs] = useState([]);
    const [favourites, setfavourites] = useState([]);
    const [filter, setFilter] = useState("gifs");
    const gf = new GiphyFetch("WXJyF8VgHrUPoOvnyFJfed9mjE1WAcVp");

    return <GifContext.Provider value={{gf, gifs, setGifs, filter, setFilter, favourites}}>
        {children}
    </GifContext.Provider>
}

export const GifState = () => {
    return useContext(GifContext)
}

export default GifProvider;