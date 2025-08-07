import { useState } from 'react';
import styles from "./TodoItem.module.css";

export const TodoItem = ({ id, title, completed, setIsChangeList }) => {
    const [itemContent, setItemContent] = useState({ id, title, completed });
    const isChanged = (itemContent.completed !== completed) || (itemContent.title !== title) ? true : false;

    const handleSubmit = (event) => {
        event.preventDefault()
        if (confirm(`Вы точно хотите изменить задачу?\n"${title}"`)) {
            fetch(`http://localhost:3000/todos/${id}`, {
                method: "PUT",
                headers: { 'Content-Type': 'application/json;charset=utf-8' },
                body: JSON.stringify({
                    title: itemContent.title,
                    completed: itemContent.completed,
                })
            }).finally(() => setIsChangeList(true))
        }
    }
    const handleOnChangeCheckbox = ({ target }) => setItemContent({ ...itemContent, completed: target.checked });
    const handleOnChangeInput = ({ target }) => { setItemContent({ ...itemContent, title: target.value }) };

    const handleClickToDelete = () => {
        if (confirm(`Вы точно хотите удалить задачу?\n"${title}"`)) {
            fetch(`http://localhost:3000/todos/${id}`, {
                method: "DELETE"
            }).finally(() => setIsChangeList(true))
        }
    }

    return (
        <li key={id}>
            <form className={styles.form} onSubmit={handleSubmit}>
                <input
                    type="checkbox"
                    checked={itemContent.completed}
                    onChange={handleOnChangeCheckbox}
                />
                <input
                    className={`${styles.input} ${itemContent.completed ? styles.compeletedTitle : ""}`}
                    type="text"
                    value={itemContent.title}
                    onChange={handleOnChangeInput}
                />
                {isChanged
                    ? <button className={styles.buttonSave} type="submit">Сохранить</button>
                    : ""
                }
                <button className={styles.buttonReset} onClick={handleClickToDelete} type="button">Удалить</button>
            </form>
        </li>
    )
}