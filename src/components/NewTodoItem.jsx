import { useState } from "react"

export const NewTodoItem = () => {
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

    return (
        <li>
            <form>
                <input type="text" placeholder="Введите задачу" value={newTodoItemTitle} onChange={onChange} />
                <button disabled={!isValid}>Сохранить</button>
                {!isEmpty ? <button>Сбросить</button> : ""}
            </form>
        </li>
    )
}