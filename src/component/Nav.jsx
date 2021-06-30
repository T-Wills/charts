import React from 'react';
import {useState, useEffect} from "react";
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

const Nav = () => {

  const [searchchart, setSearchChart] = useState("");
  const [allcharts, setAllCharts] = useState([]);

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          
         {/*  {allcharts.filter((val) => {
                  if(searchchart === "") {
                    return val
                  }else if(val.search.toLowerCase().includes(searchchart.toLowerCase())){
                    return val
                  }
                }).map((val, index) => {
                return(  
                  <div key={index}>
                    
                    
                  </div>
                );
          })} */}
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
                  inputProps={{ 'aria-label': 'search' }}
                  onChange={event=>{searchchart(event.target.value)}}
                />
                {allcharts.filter((val) => {
                    if(searchchart === "") {
                      return val
                    }else if(val.className.toLowerCase().includes(searchchart.toLowerCase())){
                      return val
                    }
                  }).map((val, index) => {
                  return(  
                    <div key={index}>
                      <p>{val.className} </p>
                    </div>
                  );
                })}
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Nav;