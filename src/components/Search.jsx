import { useState } from "react";
import styles from "./Search.module.css";

export const Search = ({ serverURL, setServerURL }) => {
    const [searchValue, setSearchValue] = useState('');
    const [sortEnabled, setSortEnabled] = useState(false);

    const baseURL = serverURL.split("?")[0];

    const buildURL = (search = '', sort = false) => {
        const params = new URLSearchParams();

        const trimmed = search.trim();
        if (trimmed) {
            params.set("title_like", trimmed);
        }

        if (sort) {
            params.set("_sort", "title");
            params.set("_order", "asc");
        }

        const queryString = params.toString();
        return queryString ? `${baseURL}?${queryString}` : baseURL;
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        const newURL = buildURL(searchValue, sortEnabled);
        setServerURL(newURL);
    };

    const handleResetClick = () => {
        setSearchValue('');
        const newURL = buildURL('', sortEnabled);
        setServerURL(newURL);
    };

    const handleSortClick = () => {
        const newSort = !sortEnabled;
        setSortEnabled(newSort);
        const newURL = buildURL(searchValue, newSort);
        setServerURL(newURL);
    };

    const isValid = searchValue.trim().length > 0;

    return (
        <form className={styles.form} onSubmit={handleSearchSubmit}>
            <input
                className={styles.input}
                type="text"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                placeholder="Текст для поиска"
            />
            {isValid && (
                <button className={styles.buttonReset} type="button" onClick={handleResetClick}>
                    Сброс
                </button>
            )}
            <button className={styles.buttonSearch} type="submit" disabled={!isValid}>
                Поиск
            </button>
            <button className={styles.buttonSort} type="button" onClick={handleSortClick}>
                {sortEnabled ? "Отключить сортировку" : "Отсортировать"}
            </button>
        </form>
    );
};
