import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(0.3),
    },
  },
}));

export default function ContainedButtons() {
  const classes = useStyles();

    return (
        <div className={classes.root}>
            <Button variant="contained" color="primary">
            Day
            </Button>
            <Button variant="contained" color="primary">
             Week
            </Button>
            <Button variant="contained" color="primary">
             Month
            </Button>
            <Button variant="contained" color="primary">
             Quarter
            </Button>
            <Button variant="contained" color="primary">
             Half
            </Button>
            <Button variant="contained" color="primary">
             Year
            </Button>
      
        </div>
    )
}

