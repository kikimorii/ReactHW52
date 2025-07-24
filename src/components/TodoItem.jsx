import { useState } from 'react';

export const TodoItem = ({ id, title, completed }) => {
    const [itemContent, setItemContent] = useState({ id, title, completed });
    const isChanged = (itemContent.completed !== completed) || (itemContent.title !== title) ? true : false;

    const handleSubmit = (event) => { event.preventDefault() }
    const handleOnChangeCheckbox = ({ target }) => setItemContent({ ...itemContent, completed: target.checked });
    const handleOnChangeInput = ({target}) => { setItemContent({...itemContent, title: target.value}) };

    return (
        <li key={id}>
            <form onSubmit={handleSubmit}>
                <input type="checkbox" checked={itemContent.completed} onChange={handleOnChangeCheckbox} />
                <input type="text" value={itemContent.title} onChange={handleOnChangeInput} />
                {isChanged ? <button type="submit">Сохранить</button> : ""}
                <button type="button">Удалить</button>
            </form>
        </li>
    )
}