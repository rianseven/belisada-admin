import { Injectable } from '@angular/core';
import { Configuration } from '../../config/configuration';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { HttpHeaders } from '@angular/common/http/src/headers';
import { Router } from '@angular/router';
import {List, ChangeStatus, Edit, Add} from '../../models/brand/brand.model';

import 'rxjs/add/operator/map';
@Injectable()
export class SpecService {

  constructor(private configuration: Configuration, private http: HttpClient, private routes: Router) { }

  // getList(){
  //   return this.http.get(this.configuration.apiURL + '/manage/brand?page=1&itemperpage=10&ob=name&ot=ASC')
  //   .map(resp => resp as List);
  // }

  getList(queryParams: Object): Observable<List> {
    let params = new HttpParams();
    Object.keys(queryParams).forEach(function(k){
      params = params.append(k, queryParams[k]);
    });
    return this.http.get(this.configuration.apiURL + '/manage/attribute', {params: params})
      .map(resp => resp as List);
  }

  getAttributeValue(queryParams: Object) {
    let params = new HttpParams();
    Object.keys(queryParams).forEach(function(k){
      params = params.append(k, queryParams[k]);
    });
    return this.http.get(this.configuration.apiURL + '/manage/attributevalue', {params: params})
      .map(resp => resp as any);
  }

  changeStatus(data){
    return this.http.put(this.configuration.apiURL + '/manage/attribute/active', data)
    .map(resp => resp as ChangeStatus);
  }

  edit(data){
    return this.http.put(this.configuration.apiURL + '/manage/attribute/update', data)
    .map(resp => resp as Edit);
  }

  add(data){
    return this.http.post(this.configuration.apiURL + '/manage/attribute/create', data)
    .map(resp => resp as Add);
  }

  addAttributeValue(data){
    return this.http.post(this.configuration.apiURL + '/manage/attributevalue/create', data)
    .map(resp => resp);
  }

}
