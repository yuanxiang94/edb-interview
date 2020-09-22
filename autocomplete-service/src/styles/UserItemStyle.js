import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "33.33%",
    flexShrink: 0,
  },
  webIcon: {
    margin: theme.spacing(1),
  },
  url: {
    margin: theme.spacing(1),
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));

export default useStyles;
