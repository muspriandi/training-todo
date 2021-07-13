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
            <li className={isComplete ? 'complete' : ''} onClick={() => this.handleToogleTodo()}
                style={{width:'55%',marginLeft:'21%',listStyleType:'none',height:'4em'}}
            >
            <Grid container>
                <Grid item xs={1}>
                    <Checkbox isChecked={isComplete}/>
                </Grid>
                <Grid container xs={10} style={{textAlign:'left'}}>
                    <Grid item xs={10}>
                        <h3 style={{margin:0,padding:0,height:'1.5em'}}>{todoListItem.id}. {todoListItem.value}</h3>
                    </Grid>
                    <Grid item xs={2}>
                        <span style={{fontSize:'0.9em'}}>{todoListItem.deadline}</span>
                    </Grid>
                </Grid>
                <Grid item xs={1}>
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