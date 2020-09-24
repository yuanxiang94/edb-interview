import React from "react";
// Components
import { RepositoryItem, UserItem, CommitItem } from "./";
// Material
import Container from "@material-ui/core/Container";
// Styles
import { DataListStyle } from "../styles/DataListStyle";

const DataList = (props) => {
  const classes = DataListStyle();

  const { datalist, onRepoSelected } = props;
  const { type, response } = datalist;
  const { items } = response;

  let dataItems = "";

  if (type === "repositories") {
    dataItems = items.map((item) => (
      <RepositoryItem
        item={item}
        key={item.id}
        onRepoSelected={(repo) => onRepoSelected(repo)}
      />
    ));
  } else if (type === "users") {
    dataItems = items.map((item) => <UserItem item={item} key={item.id} />);
  } else if (type === "commits") {
    dataItems = items.map((item) => (
      <CommitItem item={item} key={item.html_url} />
    ));
  }

  return (
    <Container maxWidth="md" className={classes.root}>
      {dataItems}
    </Container>
  );
};

export { DataList };
