import { useState } from "react";

export const Search = ({ serverURL, setServerURL, setIsChangeList }) => {
    const [sortFlag, setSortFlag] = useState(false);

    const handleSortClick = () => {
        if (sortFlag) {
            setServerURL(serverURL.split("?")[0]);
            setIsChangeList(true);
            setSortFlag(false);
        }
        else {
            setServerURL(`${serverURL}?_sort=title&_ord=asc`)
            setIsChangeList(true);
            setSortFlag(true);
        }
    }

    return (
        <form>
            <input type="text" placeholder="Текст для поиска" />
            <button>Сброс</button>
            <button>Поиск</button>
            <button type="button" onClick={handleSortClick}>Сортировать</button>
        </form >
    )
};