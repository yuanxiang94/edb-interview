import React, { useState } from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import PersonIcon from '@material-ui/icons/PersonSharp';
import WebIcon from '@material-ui/icons/WebSharp';
import LanguageIcon from '@material-ui/icons/LanguageSharp';
import Divider from '@material-ui/core/Divider';
import Styles from '../styles/DataItemStyle';

const DataItem = (props) => {
    const classes = Styles();
    const [expanded, setExpanded] = useState(false);

    const handleChange = () => {
        setExpanded(!expanded);
    };

    return (
        <Accordion expanded={expanded} onChange={handleChange}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>{props.item.full_name}</Typography>
                <Typography className={classes.secondaryHeading}>{props.item.description}</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <List>
                    <ListItem>
                        <ListItemAvatar>
                        <Avatar>
                            <PersonIcon />
                        </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary='Owner' secondary={props.item.owner.login} />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem>
                        <ListItemAvatar>
                        <Avatar>
                            <WebIcon />
                        </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary='Github URL' secondary={props.item.html_url} />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem>
                        <ListItemAvatar>
                        <Avatar>
                            <LanguageIcon />
                        </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary='Language' secondary={props.item.language} />
                    </ListItem>
                </List>
            </AccordionDetails>
        </Accordion>
    )
}

export default DataItem;