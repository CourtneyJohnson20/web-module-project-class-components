import React from 'react'
import Todo from './Todo'

export default class TodoList extends React.Component {
  state = {
    done: false
  }

  showAll = evt => {
    this.setState({
      ...this.state,
      done: !this.state.done
    })
  }

  render() {
    const { todos, toggleComplete } = this.props
    const filtered = todos.filter(td => !td.completed || this.state.done)
    return (
      <div>
        { filtered.map((todo) => (<Todo key={todo.id} todo={todo} toggleComplete={toggleComplete} />))}
        <button onClick={this.showAll}>{ this.state.done ? 'Hide Completed' : 'Show All'}</button>
      </div>
    )
  }
}
