import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
  },
  icon: {
    width: "300px",
  },
  messageContainer: {
    textAlign: "center",
    color: "gray",
  },
  message: {
    padding: theme.spacing(1),
  },
}));

export default useStyles;
