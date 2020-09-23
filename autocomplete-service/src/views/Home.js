import React, { useState } from "react";
// Material
import LinearProgress from "@material-ui/core/LinearProgress";
// Components
import { DataList, SearchBar, StatusDisplay } from "../components/";
// Utils
import { api } from "../utils/api";

const Home = () => {
  const [searchKey, setSearchKey] = useState({
    keyword: undefined,
    type: "repositories",
  });
  const [loading, setLoading] = useState(false);
  const [receivedData, setReceivedData] = useState({
    type: null,
    response: null,
    total: 0,
    error: null,
  });

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
          receivedData,
          type: searchKey.type,
          response: res.data,
          total: res.data.total_count,
        });
        setLoading(false);
      })
      .catch((e) => {
        setReceivedData({
          ...receivedData,
          error: e,
        });
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
      {receivedData.total !== 0 && <DataList datalist={receivedData} />}
      {(receivedData.response != null ||
        receivedData.total === 0 ||
        receivedData.error != null) && (
        <StatusDisplay receivedData={receivedData} />
      )}
    </div>
  );
};

export default Home;
