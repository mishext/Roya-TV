import axios, { Method, AxiosResponse, AxiosError } from 'axios';

export const DEFAULT_ROOT_URL_DEV = ''
export type onSuccessRequest = (res: AxiosResponse) => void
export type onFailureRequest = (err: AxiosError) => void

export enum httpStatusCode {
    Ok = 200,
    BadRequest = 400,
    UnAuthorized = 401,
    NotFound = 404
}

const HTTP_REQUEST = (method: Method, endpoint: string, post_data: object | null, onSuccess?: onSuccessRequest, onFailure?: onFailureRequest) => {

    axios({ method, url: `${endpoint}`, data: post_data })
        .then(function (response: AxiosResponse) {

            onSuccess && onSuccess(response)

        }).catch(function (error: AxiosError) {

            switch (error.response?.status) {
                case httpStatusCode.UnAuthorized:
                    // logout 
                    break;
                case httpStatusCode.BadRequest:
                case httpStatusCode.NotFound:
                    onFailure && onFailure(error)
                    break;
                default:
                    return
            }
        });
}

export const POST = (endpoint: string, post_data: object, onSuccess?: onSuccessRequest, onFailure?: onFailureRequest) => {
    return HTTP_REQUEST("post", endpoint, post_data, onSuccess, onFailure);
}

export const GET = (endpoint: string, onSuccess?: onSuccessRequest, onFailure?: onFailureRequest) => {
    return HTTP_REQUEST("get", endpoint, null, onSuccess, onFailure);
}

export const DELETE = (endpoint: string, onSuccess?: onSuccessRequest, onFailure?: onFailureRequest) => {
    return HTTP_REQUEST("delete", endpoint, null, onSuccess, onFailure);
}

export default { GET, POST, DELETE };