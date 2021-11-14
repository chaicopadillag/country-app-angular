import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Country } from '../interfaces/ICountry.interface';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private apiUrl = 'https://restcountries.com/v3.1';
  private _listCountry: Country[] = [];
  constructor(private http: HttpClient) {}
  get httpParams() {
    return new HttpParams().set('fields', 'name,capital,cca2,flags,population');
  }

  get countries(): Country[] {
    return [...this._listCountry];
  }
  searchCountyByName(keyword: string): Observable<Country[]> {
    return this.http
      .get<Country[]>(`${this.apiUrl}/name/${keyword}`, {
        params: this.httpParams,
      })
      .pipe(catchError((err) => of([])));
  }

  searchCountyByCapital(keyword: string): Observable<Country[]> {
    return this.http
      .get<Country[]>(`${this.apiUrl}/capital/${keyword}`, {
        params: this.httpParams,
      })
      .pipe(catchError((err) => of([])));
  }
  searchCountyByCode(code: string): Observable<Country[]> {
    return this.http
      .get<Country[]>(`${this.apiUrl}/alpha/${code}`)
      .pipe(catchError((err) => of([])));
  }

  searchCountyByRegion(region: string): Observable<Country[]> {
    return this.http
      .get<Country[]>(`${this.apiUrl}/region/${region}`, {
        params: this.httpParams,
      })
      .pipe(catchError((err) => of([])));
  }
}
