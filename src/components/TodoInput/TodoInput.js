import { TextField, Grid, Button } from '@material-ui/core';
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Formik, Form} from "formik";
import {validationSchema, defaultValue} from './validation';

class TodoInput extends Component{

    render(){
        const {handleSubmit} = this.props;
        return(
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
                        <Form onSubmit={handleSubmit} style={{width:'50%',marginLeft:'25%',marginTop:'2am'}}>
                            <Grid container
                            justify="center"
                            alignItems="center">
                                <Grid item xs={6}>
                                    <TextField
                                        fullWidth
                                        id="todoItemName"
                                        name="todoItemName"
                                        label="Needs To do:"
                                        value={values.todoItemName}
                                        InputLabelProps={{shrink:true}}
                                        onChange={handleChange}
                                        error={touched.todoItemName && Boolean(errors.todoItemName)}
                                        helperText={touched.todoItemName && errors.todoItemName}
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField
                                        fullWidth
                                        id="todoDeadline"
                                        name="todoDeadline"
                                        label="Deadline"
                                        type="date"
                                        value={values.todoDeadline}
                                        InputLabelProps={{shrink:true}}
                                        onChange={handleChange}
                                        error={touched.todoDeadline && Boolean(errors.todoDeadline)}
                                        helperText={touched.todoDeadline && errors.todoDeadline}
                                    />
                                </Grid>
                                <Grid item xs={12} style={{marginTop:'0.5em'}}>
                                    <Button variant="contained" color="primary" fullWidth type="submit">
                                        {updating ? "Please wait..." : "Submit"}
                                    </Button>
                                </Grid>
                            </Grid>
                        </Form>
                    )}/>
        )
    }
}

TodoInput.propTypes = {
    handleSubmit: PropTypes.func.isRequired
}

export default TodoInput;