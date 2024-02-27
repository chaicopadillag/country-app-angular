import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { Subject, Subscription, debounceTime } from 'rxjs';
import { RegionType } from '../../../country/interfaces/country.interface';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
})
export class SearchBoxComponent implements OnInit, OnDestroy {
  private debouncer = new Subject<RegionType>();
  private debouncerSuscription?: Subscription;

  @Input()
  public placeholder: string = '';

  @ViewChild('keyword')
  keyword!: ElementRef<HTMLInputElement>;

  @Output('onChangeValue')
  onChangeValue = new EventEmitter<RegionType>();

  ngOnInit(): void {
    this.debouncerSuscription = this.debouncer
      .pipe(debounceTime(300))
      .subscribe((value) => this.onChangeValue.emit(value));
  }

  ngOnDestroy(): void {
    this.debouncerSuscription?.unsubscribe();
  }

  emitValueIntup() {
    // this.onChangeValue.emit(this.keyword.nativeElement.value);
    this.debouncer.next(this.keyword.nativeElement.value as RegionType);
  }
}
