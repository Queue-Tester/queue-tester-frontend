import { Component } from '@angular/core';
import { RequestSectionService } from './request-section.service';

@Component({
  selector: 'app-request-section',
  templateUrl: './request-section.component.html',
  styleUrls: ['./request-section.component.scss'],
})
export class RequestSectionComponent {
  constructor(public requestSectionService: RequestSectionService) {}
}
