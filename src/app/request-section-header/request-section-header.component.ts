import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import axios, { AxiosResponse } from 'axios';
import { Configservice } from '../config/configservice.service';
import { RequestSectionService } from '../request-section/request-section.service';
import { ResponseSectionService } from '../response-section/response-section.service';

@Component({
  selector: 'app-request-section-header',
  templateUrl: './request-section-header.component.html',
  styleUrls: ['./request-section-header.component.scss'],
})
export class RequestSectionHeaderComponent {
  constructor(
    private configService: Configservice,
    private httpService: HttpClient,
    private requestSectionService: RequestSectionService,
    private responseService: ResponseSectionService
  ) {}
  rabbitmqUrl: string = 'amqp://myuser:mypassword@localhost:5672';
  queueName: string = 'workspaces';
  patternName: string = 'testing';
  async onClick() {
    try {
      const apiUrl = this.configService.getApiUrl();

      const response: AxiosResponse = await axios.post(
        `${apiUrl}/send-message`,
        {
          rabbitmqUrl: this.rabbitmqUrl,
          queueName: this.queueName,
          patternName: this.patternName,
          message: this.requestSectionService.message,
        }
      );
      this.responseService.response = response.data;
    } catch (error) {
      this.responseService.response = error;
    }
  }
}
