import { Component, Injectable, Input } from '@angular/core';

@Component({
  selector: 'app-status-section',
  standalone: true,
  imports: [],
  templateUrl: './status-section.component.html',
})
@Injectable({
  providedIn: 'root',
})
export class StatusSectionComponent {
  @Input() statusString!: string;
}
