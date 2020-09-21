import React from 'react';
import Container from '@material-ui/core/Container';
import RepositoryItem from './RepositoryItem';
import UserItem from './UserItem';
import Styles from '../styles/DataListStyle';

const DataList = (props) => {
    const classes = Styles();

    let dataItems = ''
    
    if (props.data.type === 'repositories') {
        dataItems = props.data.data.items.map((item) =>
        <RepositoryItem 
            item={item} 
            key={item.id}
        />
        )
    } else if (props.data.type === 'users') {
        dataItems = props.data.data.items.map((item) =>
        <UserItem 
            item={item} 
            key={item.id}
        />
        )
    }

    return (
        <Container maxWidth='md' className={classes.root}>
            { dataItems }
        </Container>
    );
}

export default DataList;