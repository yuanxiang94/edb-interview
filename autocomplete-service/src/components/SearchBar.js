import React from "react";
// Material
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import Styles from "../styles/SearchBarStyle";
import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";

const SearchBar = (props) => {
  const classes = Styles();

  // Declare Props
  const { searchKey, onSearchKeyChange, onButtonPressed } = props;
  const { type } = searchKey;

  const onKeyPressed = (event) => {
    if (event.keyCode === 13) {
      onButtonPressed();
    }
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">AutoComplete</Typography>
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            placeholder="Search…"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            inputProps={{ "aria-label": "search" }}
            onKeyDown={(e) => onKeyPressed(e)}
            onChange={(e) =>
              onSearchKeyChange({ ...searchKey, keyword: e.target.value })
            }
          />
        </div>
        <div className={classes.formControl}>
          <FormControl variant="filled">
            <InputLabel className={classes.inputLabel}>Type</InputLabel>
            <Select
              className={classes.select}
              value={type}
              onChange={(e) =>
                onSearchKeyChange({ ...searchKey, type: e.target.value })
              }
            >
              <MenuItem value="repositories">Repositories</MenuItem>
              <MenuItem value="users">Users</MenuItem>
            </Select>{" "}
          </FormControl>
        </div>
        <div className={classes.searchButton}>
          <Button variant="contained" color="primary" onClick={onButtonPressed}>
            Search
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export { SearchBar };
