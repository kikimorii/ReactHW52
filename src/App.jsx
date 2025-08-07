import styles from './App.module.css';
import { useState, useEffect } from 'react';
import { NewTodoItem } from './components/NewTodoItem';
import { TodoList } from './components/TodoList';
import { Search } from './components/Search';

export const App = () => {
  const [todoList, setTodoList] = useState([]);
  const [isChangeList, setIsChangeList] = useState(false);
  const [serverURL, setServerURL] = useState('http://localhost:3000/todos');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(serverURL)
      .then((response) => response.json())
      .then((todoListResponse) => setTodoList(todoListResponse))
      .finally(() => {
        setIsChangeList(false);
        setIsLoading(false);
      })
  }, [isChangeList, serverURL]);



  return (
    <div className={styles.app}>
      <Search serverURL={serverURL} setServerURL={setServerURL} />
      <ul>
        <NewTodoItem setIsChangeList={setIsChangeList} />
        {isLoading
          ? <div className="loaderWrapper">
              <div className="loader"></div>
            </div>
          : <TodoList todoList={todoList} setIsChangeList={setIsChangeList}/>
        }
      </ul>
    </div>
  )
}