import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, of } from 'rxjs';
import { CountryI } from '../interfaces/country.interface';

@Injectable({ providedIn: 'root' })
export class CountryService {
  private API_URL_HOST = 'https://restcountries.com/v3.1';

  constructor(private httpCliente: HttpClient) {}

  searchByCapital(keyword: string) {
    return this.httpCliente
      .get<CountryI[]>(`${this.API_URL_HOST}/capital/${keyword}`)
      .pipe(catchError((err) => of([])));
  }

  searchByCountryName(keyword: string) {
    return this.httpCliente
      .get<CountryI[]>(`${this.API_URL_HOST}/name/${keyword}`)
      .pipe(catchError((err) => of([])));
  }

  searchByRegion(keyword: string) {
    return this.httpCliente
      .get<CountryI[]>(`${this.API_URL_HOST}/region/${keyword}`)
      .pipe(catchError((err) => of([])));
  }

  searchByCode(keyword: string) {
    return this.httpCliente
      .get<CountryI[]>(`${this.API_URL_HOST}/alpha/${keyword}`)
      .pipe(
        map((countries) => (countries.length > 0 ? countries[0] : undefined)),
        catchError((err) => of(undefined))
      );
  }
}
