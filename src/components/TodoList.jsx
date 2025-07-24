import { TodoItem } from "./TodoItem";

export const TodoList = ({ todoList }) => {
    return (
        <>
            {todoList.map((todoItem) => <TodoItem key={todoItem.id} {...todoItem} />)}
        </>
    )
};