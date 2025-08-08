import { useEffect } from "react";

const useGetTodos = (serverURL, setIsLoading, setTodoList, setIsChangeList, isChangeList) => {
    useEffect(() => {
        setIsLoading(true);
        fetch(serverURL)
            .then((response) => response.json())
            .then((todoListResponse) => setTodoList(todoListResponse))
            .finally(() => {
                setIsChangeList(false);
                setIsLoading(false);
            })
    }, [isChangeList, serverURL]);
}

export default useGetTodos;