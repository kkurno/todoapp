import React, { Component } from 'react';
import TodoItem from './TodoItem';

class Main extends Component {
  render() {
    let todos = this.props.todos;
    switch(this.props.filter) {
      case 'active': todos = todos.filter(todo => todo.completed === false); break;
      case 'completed': todos = todos.filter(todo => todo.completed === true); break;
      default:
    }

    const liNodes = todos.map((todo)=>{
      return (
        <TodoItem
          key={todo.id} 
          id={todo.id}
          text={todo.text}
          onDelete={this.props.onDelete}
          completed={todo.completed}
          onToggleItem={this.props.onToggleComplete}
        />
      )
    });

    return (
      <section className="main">
        <input type="checkbox" className="toggle-all" />
        <ul className="todo-list">
          {liNodes}
        </ul>
      </section>
    );
  }
}

export default Main;