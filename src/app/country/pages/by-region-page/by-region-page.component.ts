import { Component } from '@angular/core';
import { CountryI } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: ``,
})
export class ByRegionPageComponent {
  public countries: CountryI[] = [];

  constructor(private countryService: CountryService) {}

  searchByRegion(value: string) {
    this.countryService.searchByRegion(value).subscribe((countries) => {
      this.countries = countries;
    });
  }
}
