import React from 'react'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import InfoIcon from '@material-ui/icons/Info';




const useStyles = makeStyles({
  root: {
    minWidth: 275,
    marginTop: '5px',
    color: '#737373'
  },
    title: {
      fontWeight: 'bold',
    }
    
  });
function FilterSection() {
    const classes = useStyles();

    return (
        <div>
           <Typography variant="h6"  color="textSecondary" className={classes.title} >
              Filters
           </Typography>  
           <Card className={classes.root}>
             <CardContent>
               <FormGroup column >
                <FormControlLabel  
                control={ <Checkbox  color="primary" />} 
                label="All CQA Results"  />
                <FormControlLabel   
                control={<Checkbox color="primary" />}
                 label=" CQAs with Closed Loop" />
               </FormGroup>
             </CardContent> 
           </Card>
        </div>
    )
}

export default FilterSection
