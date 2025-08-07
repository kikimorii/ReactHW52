import { TodoItem } from "./TodoItem";

export const TodoList = ({ todoList, setIsChangeList }) => {
    return (
        <>
            {   
                todoList.length 
                    ? todoList.map((todoItem) => <TodoItem key={todoItem.id} {...todoItem} setIsChangeList={setIsChangeList} />) : 
                    <h1 className="errorMessage">Ничего не найдено</h1>
            }
        </>
    )
};