import { Component, Injectable } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CheckStringService } from './services/check-string.service';
import { InputSectionComponent } from './components/input-section/input-section.component';
import { StatusSectionComponent } from './components/status-section/status-section.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, InputSectionComponent, StatusSectionComponent],
  templateUrl: './app.component.html',
})
@Injectable({
  providedIn: 'root',
})
export class AppComponent {
  title = 'Password complexity checker';

  checkString: string = '';
  statusString: string = 'empty';

  constructor(private checkStringService: CheckStringService) { };

  changeCheckString(checkString: string) {
    this.checkString = checkString;
    this.sendStatusStringForChecked(this.checkString);
  }

  sendStatusStringForChecked(statusString: string) {
    this.statusString = this.checkStringService.checkPassword(statusString);
  }
}
