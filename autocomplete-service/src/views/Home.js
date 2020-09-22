import React, { useState } from "react";
// Material
import LinearProgress from "@material-ui/core/LinearProgress";
// Components
import { DataList, SearchBar } from "../components/";
// Utils
import { api } from "../utils/api";

const Home = () => {
  const [searchKey, setSearchKey] = useState({
    keyword: undefined,
    type: "repositories",
  });
  const [loading, setLoading] = useState(false);
  const [receivedData, setReceivedData] = useState(undefined);

  const searchKeyChange = (searchKey) => {
    setSearchKey({
      ...searchKey,
      keyword: searchKey.keyword,
      type: searchKey.type,
    });
  };

  const search = () => {
    if (searchKey.keyword === undefined || searchKey.keyword === "") return;

    setLoading(true);

    api
      .get("/search", {
        params: {
          type: searchKey.type,
          keyword: searchKey.keyword,
        },
      })
      .then((res) => {
        setReceivedData({
          type: searchKey.type,
          response: res.data,
        });
        setLoading(false);
      })
      .catch((e) => {
        setLoading(false);
      });
  };

  return (
    <div>
      <SearchBar
        onSearchKeyChange={searchKeyChange}
        onButtonPressed={search}
        searchKey={searchKey}
      />
      {loading && <LinearProgress color="secondary"></LinearProgress>}
      {receivedData !== undefined && <DataList datalist={receivedData} />}
    </div>
  );
};

export default Home;
