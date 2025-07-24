import { useState } from "react"

export const NewTodoItem = ({setAddedNewTodoItemFlag}) => {
    const [newTitle, setNewTitle] = useState("");

    const isValid = newTitle.trim().length > 0;

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch('http://localhost:3000/todos', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json;charset=utf-8' },
            body: JSON.stringify({
                title: newTitle,
                completed: false,
            })
        }).finally(() => {
            setAddedNewTodoItemFlag(true);
            setNewTitle("");
        });
    }

    return (
        <li>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Введите задачу" value={newTitle} onChange={({target}) => setNewTitle(target.value)} />
                <button type="submit" disabled={!isValid}>Сохранить</button>
                {isValid ? <button type="button" onClick={() => setNewTitle("")}>Сбросить</button> : ""}
            </form>
        </li>
    )
}