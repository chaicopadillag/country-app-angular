import { Component } from '@angular/core';
import { RegionType } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: ``,
})
export class ByRegionPageComponent {
  public regions: RegionType[] = [
    'Americas',
    'Africa',
    'Asia',
    'Europe',
    'Oceania',
  ];

  constructor(private countryService: CountryService) {}

  searchByRegion(value: RegionType) {
    this.countryService.startLoading();
    this.countryService.searchByRegion(value);
  }

  get isLoading() {
    return this.countryService.isLoading;
  }

  get regionActive() {
    return this.countryService.regionActive;
  }

  get countries() {
    return this.countryService.getCountries('byRegion');
  }
}
