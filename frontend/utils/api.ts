const baseURL = "http://localhost:8000/api";

export const get = async () => {
    return await useLazyFetch("/employees", {
        method: 'GET',
        baseURL
    });
}

export const post = async (route: string, body: object) => {
    return await $fetch(route, {
        method: 'POST',
        baseURL,
        body
    });
}

const api = {
    get,
    post
}

export default api;