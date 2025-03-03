import React from 'react'
import Form from './Form'
import TodoList from './TodoList'

let id = 0
let getId = () => ++id; 

const initialTodos = [
  {id: getId(), name: 'Finish Project', completed: false},
  {id: getId(), name: 'Beat KH1', completed: false},
  {id: getId(), name: 'Apply for Jobs', completed: false}
]

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: initialTodos
    }
  }

  addTodo = (name) => {
    this.setState({
      ...this.state,
      todos: this.state.todos.concat({id: getId(), completed: false, name})
    })
  }

  toggleComplete = id => {
    this.setState({
      ...this.state,
      todos: this.state.todos.map(td => {
        if (id == td.id) return {...td, completed: !td.completed}
        return td
      })
    })
  }
  
  render() {
    return (
      <div>
        <TodoList todos={this.state.todos} toggleComplete={this.toggleComplete}/>
        <Form addTodo={this.addTodo}/>
      </div>
    )
  }
}
