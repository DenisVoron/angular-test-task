import { Component, OnDestroy, output } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-input-section',
  standalone: true,
  imports: [],
  templateUrl: './input-section.component.html',
})
export class InputSectionComponent implements OnDestroy {
  onCheckString = output<string>();
  checkInput = new Subject<string>();

  constructor() {
    this.checkInput.pipe(debounceTime(500)).subscribe((checkString: string) => {
      this.onCheckString.emit(checkString);
    });
  }

  changeCheckString(e: Event) {
    const eventValue = (e?.target as HTMLInputElement).value;
    this.checkInput.next(eventValue);
  }

  ngOnDestroy(): void {
    this.checkInput.complete();
  }
}
