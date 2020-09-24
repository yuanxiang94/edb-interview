import React, { useState } from "react";
// Material
import LinearProgress from "@material-ui/core/LinearProgress";
// Components
import { DataList, SearchBar, StatusDisplay } from "../components/";
// Utils
import { api } from "../utils/api";

const Home = () => {
  const [searchKey, setSearchKey] = useState({
    keyword: null,
    type: "repositories",
    repository: null,
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

  const searchRepositoryChange = (values) => {
    setSearchKey({
      ...searchKey,
      repository: values.repository,
      type: values.type,
    });
  };

  const search = () => {
    if (searchKey.keyword == null || searchKey.keyword === "") return;

    setLoading(true);

    api
      .get("/search", {
        params: {
          type: searchKey.type,
          keyword: searchKey.keyword,
          repository: searchKey.repository,
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
        onSearchRepositoryChange={searchRepositoryChange}
        onButtonPressed={search}
        searchKey={searchKey}
      />
      {loading && <LinearProgress color="secondary"></LinearProgress>}
      {receivedData.total !== 0 && (
        <DataList
          datalist={receivedData}
          onRepoSelected={searchRepositoryChange}
        />
      )}
      {(receivedData.response != null ||
        receivedData.total === 0 ||
        receivedData.error != null) && (
        <StatusDisplay receivedData={receivedData} />
      )}
    </div>
  );
};

export default Home;
