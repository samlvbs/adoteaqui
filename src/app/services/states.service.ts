import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs";
import { IStatesResponse } from "../interfaces/states-response/states-response.interface";

@Injectable({
    providedIn: 'root',
})

export class StatesService {
    constructor(
        private _httpClient: HttpClient
    ) {}

    getStates() {
        return this._httpClient.post<IStatesResponse>(
          'https://countriesnow.space/api/v0.1/countries/states',
          {
            country: 'brazil'
          }
        ).pipe(
          map((statesResponse =>{
            return statesResponse.data.states
          }))
        )
    }
}
