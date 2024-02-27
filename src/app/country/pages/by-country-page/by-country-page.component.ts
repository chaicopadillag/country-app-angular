import { Component } from '@angular/core';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: ``,
})
export class ByCountryPageComponent {
  constructor(private countryService: CountryService) {}

  searchByCountryName(value: string) {
    this.countryService.startLoading();
    this.countryService.searchByCountryName(value);
  }

  get isLoading() {
    return this.countryService.isLoading;
  }

  get countries() {
    return this.countryService.getCountries('byCountry');
  }
}
