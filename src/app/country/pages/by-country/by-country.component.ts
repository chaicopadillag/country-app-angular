import { Component } from '@angular/core';
import { Country } from '../../interfaces/ICountry.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styles: [
    `
      li {
        cursor: pointer;
      }
    `,
  ],
})
export class ByCountryComponent {
  public search: string = '';
  public countries: Country[] = [];
  public countriesSugeridos: Country[] = [];
  public error: boolean = false;
  public showSugeridos = false;

  constructor(private countryService: CountryService) {}

  searching(search: string): void {
    this.error = false;
    this.search = search;
    this.showSugeridos = false;
    this.countryService.searchCountyByName(search).subscribe((countries) => {
      if (countries.length <= 0) {
        this.error = true;
      }
      this.countries = countries;
    });
  }

  searchCountryAucomplete(search: string) {
    if (search.length <= 0) return;
    this.error = false;
    this.showSugeridos = true;
    this.countryService.searchCountyByName(search).subscribe(
      (countries) => {
        if (countries.length <= 0) {
          this.error = true;
        }
        this.countriesSugeridos = countries.slice(0, 5);
      },
      (error) => {
        this.countriesSugeridos = [];
      }
    );
  }
}
