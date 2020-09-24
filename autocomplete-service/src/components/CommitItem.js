import React from "react";
// Material
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import WebIcon from "@material-ui/icons/WebSharp";
import Link from "@material-ui/core/Link";
// Styles
import { CommitItemStyle } from "../styles/CommitItemStyle";

const CommitItem = (props) => {
  const classes = CommitItemStyle();

  // Declare Props
  const { item } = props;
  const { commit, html_url } = item;
  const { author, message } = commit;
  const { date, name, avatar_url } = author;
  const avatar = name.charAt(0);

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar className={classes.avatar} alt={name} src={avatar_url}>
            {avatar}
          </Avatar>
        }
        title={name}
        titleTypographyProps={{ variant: "h6" }}
        subheader={date}
      />
      <CardContent>
        <Typography variant="body1" color="textSecondary" component="p">
          {message}
        </Typography>
      </CardContent>
      <CardActions disableSpacing className={classes.urlContainer}>
        <Avatar>
          <WebIcon />
        </Avatar>
        <Link
          className={classes.url}
          underline="none"
          href={html_url}
          target="_blank"
        >
          {html_url}
        </Link>
      </CardActions>
    </Card>
  );
};

export { CommitItem };
