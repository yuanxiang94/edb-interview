import { makeStyles } from "@material-ui/core/styles";

const RepositoryItemStyle = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "33.33%",
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  repoDetails: {
    display: "flex",
  },
  searchContainer: {
    position: "absolute",
    bottom: 0,
    right: 0,
    padding: theme.spacing(3),
  },
}));

export { RepositoryItemStyle };
