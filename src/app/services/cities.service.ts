import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ICitiesResponse } from '../interfaces/cities-response/cities-response.interface';

@Injectable({
  providedIn: 'root',
})
export class CitiesService {

  constructor(
    private _httpClient: HttpClient
  ){ }

  getCities(stateName: string): Observable<string[]> {
    return this._httpClient.post<ICitiesResponse>(
        'https://countriesnow.space/api/v0.1/countries/state/cities',
        {
          country: 'Brazil',
          state: stateName,
        }
    ).pipe(
        map((citiesResponse =>{
          return citiesResponse.data;
        }))
    )

  }
}
