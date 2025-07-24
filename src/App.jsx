import styles from './App.module.css';
import { useState, useEffect } from 'react';
import { NewTodoItem } from './components/NewTodoItem';
import { TodoList } from './components/TodoList';

export const App = () => {
  const [todoList, setTodoList] = useState([]);
  const [newTodoItem, setNewtodoItem] = useState('');

  useEffect(() => {
    fetch('http://localhost:3000/todos')
      .then((response) => response.json())
      .then((todoListResponse) => setTodoList(todoListResponse))
  }, []);

  

  return (
    <div className={styles.app}>
      <NewTodoItem />
      <TodoList todoList={todoList} />
    </div>
  )
}