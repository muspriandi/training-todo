import React, {Component} from 'react';
import {AppBar,Typography,Toolbar,Container} from '@material-ui/core';
import TodoList from '../../components/TodoList/TodoList';
import TodoInput from '../../components/TodoInput/TodoInput';
import axios from 'axios';
import './Todo.css';

class Todo extends Component{
  constructor(props){
    super(props);
    this.state = {
      todoListItem: [],
    }
  }

  handleSubmit = (entity) => {
    const {todoListItem} = this.state;
    const newTodo = {
      id: todoListItem.length + 1,
      value: entity.todoItemName,
      deadline: entity.todoDeadline,
      isComplete: false
    }
    this.setState({todoListItem: [...todoListItem, newTodo]})
  }

  handleRemoveTodoList = (todoId) => {
    const {todoListItem} = this.state;
    const newTodoList = todoListItem.filter(todoListItem => todoListItem.id !== todoId)
    this.setState({todoListItem:newTodoList});
  }

  render(){
    const {todoListItem} = this.state
    return (
        <div className="App">
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" >
                Todo
              </Typography>
            </Toolbar>
          </AppBar>
          <Container className={'bodycontent'}>
          <ul>
            {
              todoListItem.map(todo => 
                <TodoList todoListItem={todo} onDeleteTodo={this.handleRemoveTodoList}/>
              )
            }
          </ul>
          <TodoInput handleSubmit={this.handleSubmit}/>
          </Container>
        </div>
      );
    }
}

export default Todo;
