import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { Country } from '../../interfaces/ICountry.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-show-country',
  templateUrl: './show-country.component.html',
  styles: [],
})
export class ShowCountryComponent implements OnInit {
  country!: Country;

  constructor(
    private activedRoute: ActivatedRoute,
    private countryService: CountryService
  ) {}

  ngOnInit(): void {
    this.activedRoute.params
      .pipe(
        switchMap(({ countryCode }) =>
          this.countryService.searchCountyByCode(countryCode)
        ),
        tap()
      )
      .subscribe((countries) => {
        this.country = countries[0] || null;
      });

    // this.activedRoute.params.subscribe(({ countryId }) => {
    //   this.countryService
    //     .searchCountyByCode(countryId)
    //     .subscribe((countries) => {
    //       this.country = countries[0] || <Country>{};
    //       console.log(this.country);
    //     });
    // });
  }
}
