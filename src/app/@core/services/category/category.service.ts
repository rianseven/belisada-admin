import { CategoryAttribute } from './../../models/manage-product/manage-product';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Configuration } from '../../config/configuration';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http/src/headers';
import { Router } from '@angular/router';
import {
  EditCategory, AddCategory, ListCategory,
  ActiveCategory, ListSpec, AddSpec, EditSpec, DeleteSpec, AddVarian
} from '../../models/category/category.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private configuration: Configuration, private http: HttpClient, private routes: Router) { }

  getCategory(queryParams: Object): Observable<ListCategory> {
    let params = new HttpParams();
    Object.keys(queryParams).forEach(function(k) {
      params = params.append(k, queryParams[k]);
    });
    return this.http.get(this.configuration.apiURL + '/manage/category', {params: params})
      .pipe(
        map(resp => resp as ListCategory)
      );
  }

  addCategory(data) {
    return this.http.post(this.configuration.apiURL + '/manage/category/create', data)
      .pipe(
        map(resp => resp as AddCategory)
      );
  }

  updateCategory(data) {
    return this.http.put(this.configuration.apiURL + '/manage/category/update', data)
      .pipe(
        map(resp => resp as EditCategory)
      );
  }

  activeCategory(data) {
    return this.http.post(this.configuration.apiURL + '/manage/category/active', data)
      .pipe(
        map(resp => resp as ActiveCategory)
      );
  }

  getSpec(queryParams: Object): Observable<ListSpec> {
    let params = new HttpParams();
    Object.keys(queryParams).forEach(function(k) {
      params = params.append(k, queryParams[k]);
    });

    return this.http.get(this.configuration.apiURL + '/manage/category/attribute', {params: params})
      .pipe(
        map(resp => resp as ListSpec)
      );
  }

  addSpec(data) {
    return this.http.post(this.configuration.apiURL + '/manage/category/attribute/create', data)
      .pipe(
        map(resp => resp as AddSpec)
      );
  }

  updateSpec(data) {
    return this.http.put(this.configuration.apiURL + '/manage/category/attribute/update', data)
      .pipe(
        map(resp => resp as EditSpec)
      );
  }

  srcSpec(queryParams: Object): Observable<ListSpec> {
    let params = new HttpParams();
    Object.keys(queryParams).forEach(function(k) {
      params = params.append(k, queryParams[k]);
    });

    return this.http.get(this.configuration.apiURL + '/manage/attribute', {params: params})
      .pipe(
        map(resp => resp as ListSpec)
      );
  }

  delSpec(data): Observable<DeleteSpec> {

    return this.http.request('delete', this.configuration.apiURL + '/manage/category/attribute/delete', { body: data })
      .pipe(
        map(resp => resp as DeleteSpec)
      );
  }

  getListCategoryAttribute(queryParams): Observable<CategoryAttribute[]> {
    let params = new HttpParams();
    Object.keys(queryParams).forEach(function(k) {
      params = params.append(k, queryParams[k]);
    });
    return this.http.get(this.configuration.apiURL + '/manage/product/category/attribute', {params: params})
      .pipe(
        map(response => response as CategoryAttribute[]),
      );
  }

  addVarian(data) {
    return this.http.post(this.configuration.apiURL + '/manage/category/attribute/varian', data)
      .pipe(
        map(resp => resp as AddVarian)
      );
  }
}
