import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import 'todomvc-app-css/index.css'
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

class App extends Component {
  constructor(props) {
    super(props);
    const initialTodos = [
      {id: 1, text: 'Go buy shoes', completed: false},
      {id: 2, text: 'Walk the dog', completed: true},
      {id: 3, text: 'Go fitness', completed: false},
    ];
    this.state = {
      filter: 'all',
      todos: initialTodos,
      flagId: initialTodos.length,
    }
  }

  onDelete = (index) => {
    let newflagId = this.state.flagId + 1;
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== index),
      flagId: newflagId
    });
  }

  addTodo = (todoText) => {
    const newFlagId = this.state.flagId + 1;
    this.setState({
      todos: [...this.state.todos, { id: newFlagId, text: todoText, completed: false }],
      flagId: newFlagId
    })
  }

  toggleComplete = (id, completed) => {
    const currentTodos = this.state.todos;
    this.setState({
      todos: currentTodos.map(todo => {
        return todo.id === id ? {...todo, completed} : todo
        // or
        // if(todo.id === id) {
        //   todo.complete = completed;
        // }
        // return todo
      })
      // or
      // todos: currentTodos.map(todo => { return todo.id === id ? {...todo, completed} : todo })
      // {...todo, completed} is equal to {...todo, complete: completed}
    });
  }

  changeCurrentFilter = (filterType) => {
    this.setState({
      filter: filterType
    });
  }

  render() {
    const countActiveItem = this.state.todos.filter(todo => todo.completed === false).length;

    return (
      <div className="todoapp">
        <Header onSubmit={this.addTodo}/>
        <Main filter={this.state.filter} todos={this.state.todos} onDelete={this.onDelete} onToggleComplete={this.toggleComplete}/>
        <Footer filter={this.state.filter} changeCurrentFilter={this.changeCurrentFilter} countActiveItem={countActiveItem}/>
      </div>
    );
  }
}

export default App;
