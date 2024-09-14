import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs";

@Injectable({
    providedIn: 'root',
})

export class StatesService {
    constructor(
        private _httpClient: HttpClient
    ) {}

    getStates() {
        return this._httpClient.post<any>(
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
