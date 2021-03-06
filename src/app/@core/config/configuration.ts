import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Configuration {
  apiURL: string = environment.apiUrl;
  eventURL: string = environment.eventUrl;
  productURL: string = environment.productUrl;
}
