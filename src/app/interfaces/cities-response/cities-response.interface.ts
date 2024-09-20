import { IBaseCountriesResponse } from "../base-countries-response.interface";

export interface ICitiesResponse extends IBaseCountriesResponse {
  data: string[];
}
