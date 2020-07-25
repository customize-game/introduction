// library
import React from 'react'
import { Link } from "react-router-dom"
import { makeStyles } from '@material-ui/core/styles'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

export default function() {
  const classes = makeStyles((theme) => ({
    toolbarSecondary: {
      justifyContent: 'space-between',
      overflowX: 'auto',
    },
    toolbarLink: {
      padding: theme.spacing(1),
      flexShrink: 0,
      color: "#FFFFFF" ,
    },
  }))();

  return (
      <Toolbar component="nav" variant="dense" classes={classes.toolbarSecondary} >
        <Link to="/introduction" >
          <Typography
            component="body2"
            variant="body2"
            color="inherit"
            align="center"
            noWrap
            className={classes.toolbarLink}
          >
            Top
          </Typography>
        </Link>
        <Link to="/introduction/system">
          <Typography
            component="body2"
            variant="body2"
            color="inherit"
            align="center"
            noWrap
            className={classes.toolbarLink}
          >
            System
          </Typography>
        </Link>
        <Link to="/introduction/customized">
          <Typography
            component="body2"
            variant="body2"
            color="inherit"
            align="center"
            noWrap
            className={classes.toolbarLink}
          >
            Customized
          </Typography>
        </Link>
        <Link to="/introduction/battle">
          <Typography
            component="body2"
            variant="body2"
            color="inherit"
            align="center"
            noWrap
            className={classes.toolbarLink}
          >
            Battle
          </Typography>
        </Link>
        <Link to="/introduction/operation">
          <Typography
            component="body2"
            variant="body2"
            color="inherit"
            align="center"
            noWrap
            className={classes.toolbarLink}
          >
            Operation
          </Typography>
        </Link>
        <Link to="/introduction/members">
          <Typography
            component="body2"
            variant="body2"
            color="inherit"
            align="center"
            noWrap
            className={classes.toolbarLink}
          >
            Members
          </Typography>
        </Link>
      </Toolbar>
  )
}
