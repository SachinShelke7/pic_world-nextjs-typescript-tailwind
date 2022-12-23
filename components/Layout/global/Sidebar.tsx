import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setItems } from "../../../redux";

type Props = {};

const Sidebar = (props: Props) => {
  const title = "API";
  const title1 = "Picture World";
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const apiKey = "a12408a0ebbac3ad271913f2c4415001";

  useEffect(() => {
    dispatch(setItems({ query: query }));
  }, [dispatch, query]);

  useEffect(() => {
    if (query) {
      axios
        .get(
          `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`
        )
        .then((res) => setData(res.data.photos.photo));

      dispatch(setItems({ data: data }));
    }
  }, [query]);

  const searchQueries = ["nature", "future", "business", "silent", "cool"];
  return (
    <div className="min-w-[250px] sm:max-w-[250px] sm:min-h-screen bg-gray-100">
      <div className="w-full bg-gray-700 text-white text-center h-10 flex items-center justify-center">
        <h3 className="font-medium ">{title}</h3>
      </div>
      <div className="hidden sm:block">
        <div>
          {searchQueries.map((item, key) => {
            return (
              <div className="pt-2 pl-5 capitalize" key={key}>
                <button
                  className="cursor-pointer"
                  onClick={() => setQuery(item)}
                >
                  {item}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
