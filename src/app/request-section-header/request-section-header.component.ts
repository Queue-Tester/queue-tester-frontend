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
  rabbitmqUrl: string = '';
  queueName: string = '';
  patternName: string = '';
  isLoading: boolean = false;
  async onClick() {
    try {
      this.isLoading = true;
      const apiUrl = this.configService.getApiUrl();
      const response: AxiosResponse = await axios.post(
        `${apiUrl}/send-message`,
        {
          rabbitmqUrl: this.rabbitmqUrl,
          queueName: this.queueName,
          patternName: this.patternName,
          message: JSON.parse(this.requestSectionService.message),
        }
      );
      this.responseService.response = JSON.stringify(response.data);
    } catch (error) {
      this.responseService.response = error;
    } finally {
      this.isLoading = false;
    }
  }
}
