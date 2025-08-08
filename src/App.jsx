import styles from './App.module.css';
import { useState } from 'react';
import { NewTodoItem } from './components/NewTodoItem';
import { TodoList } from './components/TodoList';
import { Search } from './components/Search';
import { useGetTodos } from './utils/utils';

export const App = () => {
  const [todoList, setTodoList] = useState([]);
  const [isChangeList, setIsChangeList] = useState(false);
  const [serverURL, setServerURL] = useState('http://localhost:3000/todos');
  const [isLoading, setIsLoading] = useState(false);

  useGetTodos(serverURL, setIsLoading, setTodoList, setIsChangeList, isChangeList)

  return (
    <div className={styles.app}>
      <Search serverURL={serverURL} setServerURL={setServerURL} />
      <ul>
        <NewTodoItem setIsChangeList={setIsChangeList} />
        {isLoading
          ?
          <div className="loaderWrapper">
            <div className="loader"></div>
          </div>
          : <TodoList todoList={todoList} setIsChangeList={setIsChangeList} />
        }
      </ul>
    </div>
  )
}