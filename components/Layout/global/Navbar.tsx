import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { setItems } from "../../../redux";
import axios from "axios";

type Props = {};

const Navbar = (props: Props) => {
  const dispatch = useDispatch();
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);
  const apiKey = "a12408a0ebbac3ad271913f2c4415001";

  const handleQuery = (e: any) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    axios
      .get(
        `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`
      )
      .then((res) => setData(res.data.photos.photo));

    dispatch(setItems({ data: data }));
  };

  return (
    <div className="mt-1">
      <form
        onSubmit={handleSubmit}
        className="rounded-lg border flex sm:max-w-[375px] items-center mx-2 px-2 sm:mx-0"
      >
        <input
          type="search"
          className="bg-transparent w-full sm:min-w-[350px] px-2 py-1 outline-0 "
          placeholder="Search Query..."
          value={query}
          onChange={(e) => handleQuery(e)}
          required
          minLength={3}
        />
        <button type="submit">
          <FaSearch color="gray" />
        </button>
      </form>
    </div>
  );
};

export default Navbar;
