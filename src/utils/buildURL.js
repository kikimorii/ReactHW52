export default (baseURL) => {
    return (search = '', sort = false) => {
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
}