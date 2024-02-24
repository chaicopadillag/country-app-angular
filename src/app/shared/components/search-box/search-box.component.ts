import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
})
export class SearchBoxComponent {
  @Input()
  public placeholder: string = '';

  @ViewChild('keyword')
  keyword!: ElementRef<HTMLInputElement>;

  @Output('onChangeValue')
  onChangeValue = new EventEmitter<string>();

  emitValueIntup() {
    this.onChangeValue.emit(this.keyword.nativeElement.value);
  }
}
