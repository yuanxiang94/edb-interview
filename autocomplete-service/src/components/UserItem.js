import React, { useState } from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Avatar from '@material-ui/core/Avatar';
import WebIcon from '@material-ui/icons/WebSharp';
import Link from '@material-ui/core/Link';
import Styles from '../styles/UserItemStyle';

const UserItem = (props) => {
    const classes = Styles();
    const [expanded, setExpanded] = useState(false);

    const handleChange = () => {
        setExpanded(!expanded);
    };

    return (
        <Accordion expanded={expanded} onChange={handleChange}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>{props.item.login}</Typography>
                
            </AccordionSummary>
            <AccordionDetails>
                <div className={classes.webIcon}>
                    <Avatar>
                        <WebIcon />
                    </Avatar>
                </div>
                <div className={classes.url}>
                <Typography>
                        <Link underline='none' href={props.item.html_url} target='_blank'>
                            {props.item.html_url}
                        </Link>
                    </Typography>
                </div>
                
            </AccordionDetails>
        </Accordion>
    )
}

export default UserItem;