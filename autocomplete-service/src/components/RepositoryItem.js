import React, { useState } from "react";
// Material
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import PersonIcon from "@material-ui/icons/PersonSharp";
import WebIcon from "@material-ui/icons/WebSharp";
import LanguageIcon from "@material-ui/icons/LanguageSharp";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";

// Styles
import Styles from "../styles/RepositoryItemStyle";

const RepositoryItem = (props) => {
  const classes = Styles();

  // Declare Props
  const { item, onRepoSelected } = props;
  const { full_name, description, owner, html_url, language } = item;

  const [expanded, setExpanded] = useState(false);

  const handleChange = () => {
    setExpanded(!expanded);
  };

  return (
    <Accordion expanded={expanded} onChange={handleChange}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography className={classes.heading}>{full_name}</Typography>
        <Typography className={classes.secondaryHeading}>
          {description}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <div className={classes.repoDetails}>
          <List>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <PersonIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Owner" secondary={owner.login} />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <WebIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Github URL" secondary={html_url} />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <LanguageIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Language" secondary={language} />
            </ListItem>
          </List>
        </div>
        <div className={classes.searchContainer}>
          <Button
            variant="contained"
            color="primary"
            onClick={() =>
              onRepoSelected({ repository: full_name, type: "commits" })
            }
          >
            Search for Commits
          </Button>
        </div>
      </AccordionDetails>
    </Accordion>
  );
};

export { RepositoryItem };
