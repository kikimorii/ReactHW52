const createNewTodoItem = (newTitle, setIsChangeList, setNewTitle) => {
    return async (event) => {
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
}

export default createNewTodoItem;