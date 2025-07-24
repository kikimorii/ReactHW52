import { useState } from "react"

export const NewTodoItem = ({setAddedNewTodoItemFlag}) => {
    const [newTodoItemTitle, setNewTodoItemTitle] = useState('');
    const [isValid, setIsValid] = useState(false);
    const [isEmpty, setIsEmpty] = useState(true);

    const onChange = ({ target }) => {
        if (target.value.length > 0) {
            setIsValid(true);
            setIsEmpty(false);
        } else {
            setIsValid(false);
            setIsEmpty(true);
        }
        setNewTodoItemTitle(target.value);
    }

    const handleClickSave = (event) => {
        event.preventDefault();
        fetch('http://localhost:3000/todos', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json;charset=utf-8' },
            body: JSON.stringify({
                title: newTodoItemTitle,
                completed: false,
            })
        }).finally(() => setAddedNewTodoItemFlag(true));
    }

    const handleClickReset = (event) => {
        event.preventDefault();
        setNewTodoItemTitle("");
        setIsValid(false);
        setIsEmpty(true);
    }

    return (
        <li>
            <form>
                <input type="text" placeholder="Введите задачу" value={newTodoItemTitle} onChange={onChange} />
                <button disabled={!isValid} onClick={handleClickSave}>Сохранить</button>
                {!isEmpty ? <button onClick={handleClickReset}>Сбросить</button> : ""}
            </form>
        </li>
    )
}