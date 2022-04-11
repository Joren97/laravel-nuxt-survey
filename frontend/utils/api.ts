const baseURL = "http://dummy.restapiexample.com/api/v1";

export const get = async () => {
    return await useLazyFetch("/employees", {
        method: 'GET',
        baseURL
    });
}

export const post = async (route: string, body: object) => {
    return await useFetch(route, {
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