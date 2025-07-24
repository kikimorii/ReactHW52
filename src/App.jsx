import { NewTodoItem } from './components/NewTodoItem';
import styles from './App.module.css';

export const App = () => {
  return (
    <div className={styles.app}>
      <NewTodoItem />
    </div>
  )
}