import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import Styles from '../styles/SearchBarStyle';
import Button from '@material-ui/core/Button';

const SearchBar = (props) => {
    const classes = Styles();

    const [searchKey, setSearchKey] = useState('');

    const keyPressed = (event) => {
        if(event.keyCode === 13) {
           props.onSearch(searchKey);
        }
    }

    const onChange = (event) => {
        setSearchKey(event.target.value);
    }

    const buttonPressed = () => {
        props.onSearch(searchKey);
    }

    return(
        <AppBar position='static'>
            <Toolbar>
                <Typography variant='h6'>
                    AutoComplete
                </Typography>
                <div className={classes.search}>
                    <div className={classes.searchIcon}>
                        <SearchIcon />
                    </div>
                    <InputBase
                        placeholder='Search…'
                        classes={{
                            root: classes.inputRoot,
                            input: classes.inputInput,
                        }}
                        inputProps={{ 'aria-label': 'search' }}
                        onKeyDown={(e) => keyPressed(e)}
                        onChange={(e) => onChange(e)}
                    />
                </div>
                <Button variant='contained' color='primary' onClick={buttonPressed}>
                    Search
                </Button>    
            </Toolbar>
                
        </AppBar>            
    )
}

export default SearchBar;