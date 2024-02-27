import { Component } from '@angular/core';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
})
export class ByCapitalPageComponent {
  constructor(private countryService: CountryService) {}

  searchByCapital(value: string) {
    this.countryService.startLoading();
    this.countryService.searchByCapital(value);
  }
  get isLoading() {
    return this.countryService.isLoading;
  }

  get countries() {
    return this.countryService.getCountries('byCapital');
  }
}
