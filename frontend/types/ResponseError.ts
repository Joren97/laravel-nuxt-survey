export interface ResponseError {
    data: {
        success: boolean,
        message: string,
        data: object
    }
}