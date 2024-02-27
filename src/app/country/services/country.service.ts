import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, of } from 'rxjs';
import {
  CacheStore,
  CountryI,
  RegionType,
} from '../interfaces/country.interface';

@Injectable({ providedIn: 'root' })
export class CountryService {
  private API_URL_HOST = 'https://restcountries.com/v3.1';
  public isLoading = false;
  public regionActive?: RegionType;
  private cacheStore: CacheStore;

  constructor(private httpCliente: HttpClient) {
    this.cacheStore = {
      byCapital: [],
      byCountry: [],
      byRegion: [],
    };
  }

  getCountries(key: string) {
    switch (key) {
      case 'byCapital':
        return this.cacheStore.byCapital;
      case 'byCountry':
        return this.cacheStore.byCountry;
      case 'byRegion':
        return this.cacheStore.byRegion;
      default:
        return [];
    }
  }

  startLoading() {
    this.isLoading = true;
  }

  finishLoading() {
    this.isLoading = false;
  }

  getHttpCountriesApi(url: string) {
    return this.httpCliente
      .get<CountryI[]>(url)
      .pipe(catchError((err) => of([])));
  }

  searchByCapital(keyword: string) {
    this.getHttpCountriesApi(
      `${this.API_URL_HOST}/capital/${keyword}`
    ).subscribe((countries) => {
      this.cacheStore.byCapital = countries;
      this.finishLoading();
    });
  }

  searchByCountryName(keyword: string) {
    this.getHttpCountriesApi(`${this.API_URL_HOST}/name/${keyword}`).subscribe(
      (countries) => {
        this.cacheStore.byCountry = countries;
        this.finishLoading();
      }
    );
  }

  searchByRegion(keyword: RegionType) {
    this.regionActive = keyword;
    return this.getHttpCountriesApi(
      `${this.API_URL_HOST}/region/${keyword}`
    ).subscribe((countries) => {
      this.cacheStore.byRegion = countries;
      this.finishLoading();
    });
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
