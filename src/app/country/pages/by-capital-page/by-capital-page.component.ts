import { Component } from '@angular/core';
import { CountryI } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
})
export class ByCapitalPageComponent {
  public countries: CountryI[] = [];

  constructor(private countryService: CountryService) {}

  searchByCapital(value: string) {
    this.countryService.searchByCapital(value).subscribe((countries) => {
      this.countries = countries;
    });
  }
}
