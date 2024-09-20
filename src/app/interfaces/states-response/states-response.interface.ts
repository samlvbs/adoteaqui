import { IBaseCountriesResponse } from "../base-countries-response.interface";
import { IStateResponseData } from "./states-response-data.interface";

export interface IStatesResponse extends IBaseCountriesResponse {
  data: IStateResponseData;
}


