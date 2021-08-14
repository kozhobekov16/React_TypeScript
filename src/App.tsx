import React, { useState } from 'react'
import { Form } from './components/Form';
import { ImToDo } from './components/interfaces';
import { Navbar } from './components/Navbar';
import { TodoList } from './components/TodoList';

const App: React.FunctionComponent = () => {
  const [todos, setTodo] = useState<Array<ImToDo>>([])

  const addHandle = (title: string) => {
    const newTodo = {
      title: title,
      id: Date.now(),
      complated: false
    }
    setTodo([newTodo, ...todos])
  }

  const toggleHandle = (id: number) => {
    setTodo(prev =>
      prev.map(todo => {
        if (todo.id === id) {
          todo.complated = !todo.complated
        }
        return todo
      })
    )
  }

  const removeHandle = (id: number) => {
    setTodo(prev =>prev.filter(todo => todo.id !== id))
  }

  return (
    <>
      <Navbar />
      <div className="container">
        <Form addPost={addHandle} />
        <TodoList todos={todos} toggle={toggleHandle} remove={removeHandle} />
      </div>
    </>
  );
}

export default App;
