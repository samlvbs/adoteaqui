import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs";

@Injectable({
    providedIn: 'root',
})
    
export class StatesService {
    constructor(
        private readonly _httpClient: HttpClient,
    ) {}

    getStates() {
        return this._httpClient.get<any>('https://countriesnow.space/api/v0.1/countries/positions').pipe(
            map((statesResponse =>{
                return statesResponse.data;
            }))
        );
    }
}