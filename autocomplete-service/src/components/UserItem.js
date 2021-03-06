import React, { useState } from "react";
// Material
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Avatar from "@material-ui/core/Avatar";
import WebIcon from "@material-ui/icons/WebSharp";
import Link from "@material-ui/core/Link";
// Styles
import { UserItemStyle } from "../styles/UserItemStyle";

const UserItem = (props) => {
  const classes = UserItemStyle();

  // Declare Props
  const { item } = props;
  const { login, html_url } = item;

  const [expanded, setExpanded] = useState(false);

  const handleChange = () => {
    setExpanded(!expanded);
  };

  return (
    <Accordion expanded={expanded} onChange={handleChange}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography className={classes.heading}>{login}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <div className={classes.webIcon}>
          <Avatar>
            <WebIcon />
          </Avatar>
        </div>
        <div className={classes.url}>
          <Typography>
            <Link underline="none" href={html_url} target="_blank">
              {html_url}
            </Link>
          </Typography>
        </div>
      </AccordionDetails>
    </Accordion>
  );
};

export { UserItem };
