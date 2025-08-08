import { useState } from "react"
import styles from "./NewTodoItem.module.css"
import createNewTodoItem from "../utils/createNewTodoItem";

export const NewTodoItem = ({ setIsChangeList }) => {
    const [newTitle, setNewTitle] = useState("");
    const isValid = newTitle.trim().length > 0;
    const createNewTodo = createNewTodoItem(newTitle, setIsChangeList, setNewTitle);

    return (
        <li>
            <form className={styles.form} onSubmit={createNewTodo}>
                <input 
                    className={styles.input}
                    type="text" 
                    placeholder="Введите новую задачу" 
                    value={newTitle} 
                    onChange={({ target }) => setNewTitle(target.value)} 
                />
                <button  className={styles.buttonSave} type="submit"  disabled={!isValid} >
                    Сохранить
                </button>
                {isValid 
                    ? <button className={styles.buttonReset} type="button" onClick={() => setNewTitle("")}>Сбросить</button> 
                    : ""
                }
            </form>
        </li>
    )
}