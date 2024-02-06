import { Component } from '@angular/core';
import { ResponseSectionService } from './response-section.service';

@Component({
  selector: 'app-response-section',
  templateUrl: './response-section.component.html',
  styleUrls: ['./response-section.component.scss'],
})
export class ResponseSectionComponent {
  constructor(public responseService: ResponseSectionService) {}
}
