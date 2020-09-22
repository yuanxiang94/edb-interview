import React from "react";
// Components
import { RepositoryItem, UserItem } from "./";
// Material
import Container from "@material-ui/core/Container";
// Styles
import Styles from "../styles/DataListStyle";

const DataList = (props) => {
  const classes = Styles();

  const { datalist } = props;
  const { type, response } = datalist;
  const { items } = response;

  let dataItems = "";

  if (type === "repositories") {
    dataItems = items.map((item) => (
      <RepositoryItem item={item} key={item.id} />
    ));
  } else if (type === "users") {
    dataItems = items.map((item) => <UserItem item={item} key={item.id} />);
  }

  return (
    <Container maxWidth="md" className={classes.root}>
      {dataItems}
    </Container>
  );
};

export { DataList };
