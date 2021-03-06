import { Injectable } from '@angular/core';
import { Configuration } from '../../config/configuration';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { BuyerPaging, SuspendBuyer } from '../../models/manage-buyer/manage-buyer.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ManageBuyerService {

  constructor(private configuration: Configuration, private http: HttpClient, private routes: Router) { }

  getBuyerList(queryParams: Object): Observable<BuyerPaging> {
    let params = new HttpParams();
    Object.keys(queryParams).forEach(function(k) {
      params = params.append(k, queryParams[k]);
    });
    return this.http.get(this.configuration.apiURL + '/manage/buyer', {params: params})
      .pipe(
        map(resp => resp as BuyerPaging)
      );
  }

  suspendBuyer(data): Observable<SuspendBuyer> {
    return this.http.put(this.configuration.apiURL + '/manage/buyer/suspended', data)
      .pipe(
        map(response => response as SuspendBuyer)
      );
  }
}
