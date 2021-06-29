import React, {Component} from 'react';
import {AppBar,Typography,Toolbar} from '@material-ui/core';
import TodoList from './components/TodoList';

import './App.css';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      newTodoItem: 'Init Value',
      todoListItem: [],
    }
  }

  handleOnChange = (e) => {
    this.setState({newTodoItem: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const {todoListItem, newTodoItem} = this.state;
    const newTodo = {
      id: todoListItem.length + 1,
      value: newTodoItem,
      isComplete: false
    }
    this.setState({todoListItem: [...todoListItem, newTodo],newTodoItem:''})
  }

  handleRemoveTodoList = (todoId) => {
    const {todoListItem} = this.state;
    const newTodoList = todoListItem.filter(todoListItem => todoListItem.id !== todoId)
    this.setState({todoListItem:newTodoList});
  }

  render(){
    const {newTodoItem, todoListItem} = this.state
    return (
        <div className="App">
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" >
                Todo
              </Typography>
            </Toolbar>
          </AppBar>
          <ul>
            {
              todoListItem.map(todo => 
                <TodoList todoListItem={todo} onDeleteTodo={this.handleRemoveTodoList}/>
              )
            }
          </ul>
          <form onSubmit={this.handleSubmit}>
              <label>
                <strong>Your Task</strong>
                <input type="text" value={newTodoItem} onChange={this.handleOnChange}/>
              </label>
              <input type="submit" value="submit" />
          </form>
        </div>
      );
    }
}

export default App;
