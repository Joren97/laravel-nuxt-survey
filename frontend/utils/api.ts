const baseURL = "http://dummy.restapiexample.com/api/v1";

export const getRequest = async () => {
    return await useLazyFetch("/employees", {
        method: 'GET',
        baseURL
    });
}

export default getRequest;