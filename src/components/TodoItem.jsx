export const TodoItem = ({id, title, completed}) => {
    return (
        <li key={id}>
            <form>
                <input type="checkbox" checked={completed} />
                <input type="text" value={title}/>
                <button>Удалить</button>
            </form>
        </li>
    )
}