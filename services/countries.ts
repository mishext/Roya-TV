import { GET } from "../utils/Network";
import { ICountry } from '../types';

export const getAllCountries = (onSuccess?: (data: ICountry[]) => void, onFailure?: (erorrData: any) => void): void => {

    GET('https://restcountries.eu/rest/v2/all', res => {
        const result = (res.data as ICountry[]).map(item => ({ ...item, callingCode: `00${item.callingCodes![0]}` }))

        onSuccess && onSuccess(result)
    }, err => {
        const erorr = err.response?.data
        onFailure && onFailure(erorr)
    })

}
