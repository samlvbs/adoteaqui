import { IBaseCountriesResponse } from "../base-countries-response.interface";
import { ICountry } from "./country.interface";

export interface ICountriesResponse extends IBaseCountriesResponse{
  data: ICountry[];
}
