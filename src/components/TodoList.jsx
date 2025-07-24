import { TodoItem } from "./TodoItem";

export const TodoList = ({ todoList, setIsChangeList }) => {
    return (
        <>
            {todoList.map((todoItem) => <TodoItem key={todoItem.id} {...todoItem} setIsChangeList={setIsChangeList} />)}
        </>
    )
};