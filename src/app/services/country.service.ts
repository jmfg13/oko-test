import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CountryAPI } from '../models/country-api';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  baseUrl = "https://restcountries.eu"
  
  constructor(private http: HttpClient) { }

  getCountries(): Observable<CountryAPI> {
    return this.http.get<CountryAPI>(this.baseUrl + "/rest/v2/all");
  }

}
