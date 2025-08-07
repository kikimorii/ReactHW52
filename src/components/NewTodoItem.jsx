import { useState } from "react"
import styles from "./NewTodoItem.module.css"

export const NewTodoItem = ({ setIsChangeList }) => {
    const [newTitle, setNewTitle] = useState("");

    const isValid = newTitle.trim().length > 0;

    const handleSubmit = async (event) => {
        event.preventDefault();
        await fetch('http://localhost:3000/todos', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json;charset=utf-8' },
            body: JSON.stringify({
                title: newTitle,
                completed: false,
            })
        });
        
        setIsChangeList(true);
        setNewTitle("");
    }

    return (
        <li>
            <form className={styles.form} onSubmit={handleSubmit}>
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
                {isValid ? <button className={styles.buttonReset} type="button" onClick={() => setNewTitle("")}>Сбросить</button> : ""}
            </form>
        </li>
    )
}