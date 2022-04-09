const baseURL = "http://dummy.restapiexample.com/api/v1";

export const getRequest = async () => {
    return await useLazyFetch("/employees", {
        method: 'GET',
        baseURL
    });
}

export const postRequest = async (route: string) => {
    return await useLazyFetch(route, {
        method: 'GET',
        baseURL
    });
}

export default getRequest;