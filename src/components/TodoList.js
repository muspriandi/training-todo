import { Checkbox, Grid } from '@material-ui/core';
import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './TodoList.css'

class TodoList extends Component{

    constructor(props){
        super(props);
        this.state = {
            isComplete: props.todoListItem.isComplete,
        }
    }
    
    handleToogleTodo = () => {
        this.setState((state) => ({isComplete: !state.isComplete}))
    }

    render(){
        const {todoListItem, onDeleteTodo} = this.props;
        const {isComplete} = this.state;
        return(
            <li className={isComplete ? 'complete' : ''} onClick={() => this.handleToogleTodo()}>
            <Grid container>
                <Grid item xs={2}>
                    <Checkbox isChecked={isComplete}/>
                </Grid>
                <Grid item xs={8}>
                    <h3>{todoListItem.id}. {todoListItem.value}</h3>
                </Grid>
                <Grid item xs={2}>
                    <button onClick={() => onDeleteTodo(todoListItem.id)}>X</button>
                </Grid>
            </Grid>
            </li>
        )
    }
}

TodoList.propTypes = {
    todoListItem: PropTypes.object.isRequired,
    onDeleteTodo: PropTypes.func.isRequired
}

export default TodoList;