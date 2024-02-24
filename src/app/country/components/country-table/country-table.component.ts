import { Component, Input } from '@angular/core';
import { CountryI } from '../../interfaces/country.interface';

@Component({
  selector: 'country-table-component',
  templateUrl: './country-table.component.html',
  styles: ``,
})
export class CountryTableComponent {
  @Input()
  countries: CountryI[] = [];
}
