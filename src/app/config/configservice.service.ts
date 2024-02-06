import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Configservice {
  private apiBaseUrl: string;
  constructor() {
    this.apiBaseUrl = 'http://localhost:45184/rabbitmq';
  }

  getApiUrl(): string {
    return this.apiBaseUrl;
  }
}
