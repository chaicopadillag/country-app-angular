import { Component } from '@angular/core';
import { Country } from '../../interfaces/ICountry.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-region',
  templateUrl: './by-region.component.html',
  styles: [
    `
      button {
        margin-right: 4px;
      }
    `,
  ],
})
export class ByRegionComponent {
  regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];

  public countries: Country[] = [];

  public error: boolean = false;

  regionActivo: string = '';

  constructor(private countryService: CountryService) {}

  btnActive(region: string) {
    return this.regionActivo === region
      ? 'btn btn-primary'
      : 'btn btn-outline-primary';
  }

  regionActive(region: string) {
    if (this.regionActivo === region) return;
    this.countries = [];
    this.regionActivo = region;
    this.countryService.searchCountyByRegion(region).subscribe((countries) => {
      if (countries.length <= 0) {
        this.error = true;
      }
      this.countries = countries;
    });
  }
}
