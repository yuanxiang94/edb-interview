import React from "react";
// Material
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
// Styles
import Styles from "../styles/StatusDisplayStyle";

const StatusDisplay = (props) => {
  const classes = Styles();

  // Declare Props
  const { receivedData } = props;
  const { response, error, total } = receivedData;

  let mainText = "";
  let secondaryText = "";

  if (error != null) {
    mainText = "Oops, something went wrong...";
    secondaryText =
      "An error has occurred, please contact the administrator for further assistance.";
  } else if (response == null) {
    mainText = "Welcome to AutoComplete!";
    secondaryText = "No search has been done yet, let's start searching now.";
  } else if (total === 0) {
    mainText = "No results found.";
    secondaryText =
      "Try adjusting your search to find what you're looking for.";
  }

  return (
    <Box height="500px" className={classes.root}>
      <div className={classes.messageContainer}>
        <Typography className={classes.message} variant="h3">
          {mainText}
        </Typography>
        <Typography className={classes.message}>{secondaryText}</Typography>
      </div>
    </Box>
  );
};

export { StatusDisplay };
