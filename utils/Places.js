import { flags } from "../constants/Flags"


export const GetCountryFlag = (country_iso_alpha_2) => {
	const lowercase_code = country_iso_alpha_2 ? country_iso_alpha_2.toLowerCase() : "INVALID_COUNTRY_CODE"
	return flags[lowercase_code]
}