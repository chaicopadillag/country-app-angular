import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { CountryI } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styles: ``,
})
export class CountryPageComponent implements OnInit {
  public country?: CountryI;

  constructor(
    private activeRoute: ActivatedRoute,
    private router: Router,
    private countryService: CountryService
  ) {}

  ngOnInit(): void {
    this.activeRoute.params
      .pipe(switchMap(({ code }) => this.countryService.searchByCode(code)))
      .subscribe((country) => {
        if (!country) this.router.navigateByUrl('');

        this.country = country;
      });
  }
}
