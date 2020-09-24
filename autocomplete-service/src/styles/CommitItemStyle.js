import { makeStyles } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

const CommitItemStyle = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(2),
  },
  avatar: {
    backgroundColor: red[500],
  },
  urlContainer: {
    display: "flex",
    margin: theme.spacing(1),
    alignItems: "center",
  },
  url: {
    marginLeft: theme.spacing(1),
  },
}));

export { CommitItemStyle };
