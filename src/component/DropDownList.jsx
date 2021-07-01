import React from 'react';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { makeStyles } from '@material-ui/core/styles';
import { animateScroll as scroll } from "react-scroll";
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import styles from "../component/home/styles.module.css";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  paper: {
    marginLeft: "60rem",
    marginTop:".5rem"
  },
}));

export default function MenuListComposition() {
  const classes = useStyles();

  return (
    <>
    <div className={styles.p}>
        <p>Click to view data per sales made</p>
      </div>
      
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <MenuList>
          <MenuItem onClick={()=>scroll.scrollTo(200)} style={{fontSize:"15px"}} >Sales per City</MenuItem>
          <MenuItem onClick={()=>scroll.scrollTo(1260)} style={{fontSize:"15px"}} >Sales per State</MenuItem>
          <MenuItem onClick={()=>scroll.scrollToBottom()} style={{fontSize:"15px"}} >Sales per Region</MenuItem>
          <MenuItem onClick={()=>scroll.scrollTo(800)} style={{fontSize:"15px"}} >Sales per Segment</MenuItem>
        </MenuList>
      </Paper>
    </div>
    </>
  );
}
