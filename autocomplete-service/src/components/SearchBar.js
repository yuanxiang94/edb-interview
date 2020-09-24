import React, { useCallback } from "react";
import debounce from "lodash.debounce";
// Material
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import Chip from "@material-ui/core/Chip";
// Style
import { SearchBarStyle } from "../styles/SearchBarStyle";

const SearchBar = (props) => {
  const classes = SearchBarStyle();

  // Declare Props
  const {
    searchKey,
    onSearchKeyChange,
    onSearchRepositoryChange,
    onButtonPressed,
  } = props;
  const { type, repository } = searchKey;

  let searchLabel = "Search…";

  if (repository != null)
    searchLabel = `Search for Commits in Repository ${repository}`;

  const debouncedSearch = useCallback(
    debounce(
      (value, type, repository) =>
        onSearchKeyChange({
          keyword: value,
          type: type,
          repository: repository,
        }),
      500
    ),
    []
  );

  const onKeyPressed = (event) => {
    if (event.keyCode === 13) {
      onButtonPressed();
    }
  };

  const onKeywordChange = (e) => {
    debouncedSearch(e.target.value, type, repository);
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
            placeholder={searchLabel}
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            inputProps={{ "aria-label": "search" }}
            onKeyDown={(e) => onKeyPressed(e)}
            onChange={onKeywordChange}
          />
        </div>
        {repository != null && (
          <div className={classes.repositoryContainer}>
            <Typography noWrap variant="caption">
              Search for Commits in
            </Typography>
            <Chip
              className={classes.repositoryChip}
              label={repository}
              onDelete={() =>
                onSearchRepositoryChange({
                  repository: null,
                  type: "repositories",
                })
              }
            />
          </div>
        )}
        {repository == null && (
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
              </Select>
            </FormControl>
          </div>
        )}

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
