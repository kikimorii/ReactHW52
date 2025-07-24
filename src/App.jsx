import styles from './App.module.css';
import { useState, useEffect } from 'react';
import { NewTodoItem } from './components/NewTodoItem';
import { TodoList } from './components/TodoList';

export const App = () => {
  const [todoList, setTodoList] = useState([]);
  const [addedNewTodoItemFlag, setAddedNewTodoItemFlag] = useState(false);

  useEffect(() => {
    fetch('http://localhost:3000/todos')
      .then((response) => response.json())
      .then((todoListResponse) => setTodoList(todoListResponse))
      .finally(() => setAddedNewTodoItemFlag(false))
  }, [addedNewTodoItemFlag]);

  

  return (
    <div className={styles.app}>
      <NewTodoItem setAddedNewTodoItemFlag={setAddedNewTodoItemFlag} />
      <TodoList todoList={todoList} />
    </div>
  )
}