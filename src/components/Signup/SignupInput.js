import React,{Component} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import PropTypes from 'prop-types';
import { Formik, Form} from "formik";
import {validationSchema, defaultValue} from './validation';

const styles = (theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
})

class SignupInput extends Component{

    render(){
        const {classes,handleSubmit} = this.props;

        return (
            <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                Sign up
                </Typography>
                <Formik
                initialValues={defaultValue}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
                render={
                    ({
                        values,
                        errors,
                        touched,
                        handleChange,
                        handleSubmit,
                        updating,
                    }) => (
                        <Form className={classes.form} noValidate>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={12}>
                                 <TextField
                                        fullWidth
                                        id="username"
                                        name="username"
                                        label="Username"
                                        value={values.username}
                                        InputLabelProps={{shrink:true}}
                                        onChange={handleChange}
                                        error={touched.username && Boolean(errors.username)}
                                        helperText={touched.username && errors.username}
                                    />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                        fullWidth
                                        id="email"
                                        name="email"
                                        label="Email"
                                        type="email"
                                        value={values.email}
                                        InputLabelProps={{shrink:true}}
                                        onChange={handleChange}
                                        error={touched.email && Boolean(errors.email)}
                                        helperText={touched.email && errors.email}
                                    />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                        fullWidth
                                        id="password"
                                        name="password"
                                        label="Password"
                                        type="password"
                                        value={values.password}
                                        InputLabelProps={{shrink:true}}
                                        onChange={handleChange}
                                        error={touched.password && Boolean(errors.password)}
                                        helperText={touched.password && errors.password}
                                    />
                            </Grid>
                        </Grid>
                        <Button variant="contained" color="primary" className={classes.submit} fullWidth type="submit">
                            {updating ? "Please wait..." : "Submit"}
                        </Button>
                        <Grid container justifyContent="flex-end">
                            <Grid item>
                            <Link href="#" variant="body2">
                                Already have an account? Sign in
                            </Link>
                            </Grid>
                        </Grid>
                        </Form>
                    )}/>
            </div>
            </Container>
        );
    }
}

export default withStyles(styles)(SignupInput)