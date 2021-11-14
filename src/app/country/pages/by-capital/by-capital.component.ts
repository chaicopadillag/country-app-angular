import { Component } from '@angular/core';
import { Country } from '../../interfaces/ICountry.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-capital',
  templateUrl: './by-capital.component.html',
  styles: [],
})
export class ByCapitalComponent {
  public search: string = '';
  public countries: Country[] = [];
  public error: boolean = false;

  constructor(private countryService: CountryService) {}

  searching(search: string): void {
    this.error = false;
    this.search = search;
    this.countryService.searchCountyByCapital(search).subscribe((countries) => {
      if (countries.length <= 0) {
        this.error = true;
      }
      this.countries = countries;
    });
  }

  searchCountryAucomplete(search: string) {
    this.error = false;
  }
}
