import { Component, EventEmitter, Output, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-search-country',
  templateUrl: './search-country.component.html',
  styles: [],
})
export class SearchCountryComponent implements OnInit {
  public search: string = '';

  @Input() placeholder: string = '';
  @Output() handleSearchCountry: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();
  debouncer: Subject<string> = new Subject();

  ngOnInit(): void {
    this.debouncer.pipe(debounceTime(3000)).subscribe((value) => {
      this.onDebounce.emit(value);
    });
  }

  searching() {
    if (this.search.trim().length > 0) {
      this.handleSearchCountry.emit(this.search);
    }
  }

  keyboardEnter() {
    this.debouncer.next(this.search);
  }
}
