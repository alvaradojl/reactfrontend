import React from 'react';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';
import styleSheet from './styleSheet';
import PropTypes from 'prop-types';

class Web3Form extends React.Component{
    constructor(props){
        super(props); 
    }

    render(){

        const { classes } = this.props;

        return(
            <Grid container className={classes.container}>
            <Grid item md={3}>

            </Grid>
            <Grid item md={6}> 
                <Typography type="display2" gutterBottom>
                    Web3 Features
                </Typography>

                <span>{web3.eth.defaultAccount}</span>
 
                    <Grid container className={classes.root}>
                        <Grid item md={12}>
                            <Grid
                            container
                            className={classes.demo}
                            align="center"
                            direction="row"
                            justify="center">

                            <Typography type="caption" gutterBottom>
                                Web3 Features
                            </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                
            </Grid>
            <Grid item md={3}>
              
            </Grid>
        </Grid>
        );
    }

}

Web3Form.propTypes = { 
    classes: PropTypes.object.isRequired
}

export default withStyles(styleSheet)(Web3Form);