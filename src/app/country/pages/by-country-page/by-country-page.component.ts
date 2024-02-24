import { Component } from '@angular/core';
import { CountryI } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: ``,
})
export class ByCountryPageComponent {
  public countries: CountryI[] = [];

  constructor(private countryService: CountryService) {}

  searchByCountryName(value: string) {
    this.countryService.searchByCountryName(value).subscribe((countries) => {
      this.countries = countries;
    });
  }
}
