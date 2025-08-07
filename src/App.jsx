import styles from './App.module.css';
import { useState, useEffect } from 'react';
import { NewTodoItem } from './components/NewTodoItem';
import { TodoList } from './components/TodoList';
import { Search } from './components/Search';

export const App = () => {
  const [todoList, setTodoList] = useState([]);
  const [isChangeList, setIsChangeList] = useState(false);
  const [serverURL, setServerURL] = useState('http://localhost:3000/todos');

  useEffect(() => {
    fetch(serverURL)
      .then((response) => response.json())
      .then((todoListResponse) => setTodoList(todoListResponse))
      .finally(() => setIsChangeList(false))
  }, [isChangeList, serverURL]);



  return (
    <div className={styles.app}>
      <Search serverURL={serverURL} setServerURL={setServerURL} />
      <ul>
        <NewTodoItem setIsChangeList={setIsChangeList} />
        <TodoList todoList={todoList} setIsChangeList={setIsChangeList} />
      </ul>
    </div>
  )
}