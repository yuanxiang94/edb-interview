import React from 'react';
import Container from '@material-ui/core/Container';
import DataItem from './DataItem';
import Styles from '../styles/DataListStyle';

const DataList = (props) => {
    const classes = Styles();

    return (
        <Container maxWidth='md' className={classes.root}>
            { props.data.items.map((item) =>
                <DataItem 
                    item={item} 
                    key={item.id}
                />
                )
            }
        </Container>
    );
}

export default DataList;