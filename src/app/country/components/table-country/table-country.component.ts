import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/ICountry.interface';

@Component({
  selector: 'app-table-country',
  templateUrl: './table-country.component.html',
  styles: [],
})
export class TableCountryComponent {
  @Input() countries: Country[] = [];
  constructor() {}
}
