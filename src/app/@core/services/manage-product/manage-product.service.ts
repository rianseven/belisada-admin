import {
  BrandList, AddProductRequest, ManageProductListing,
  ProductDetailList, listingDetail
} from './../../models/manage-product/manage-product';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import {
  ManageProduct, revise, ListBrand,
  listingCategory, listingProduct, deetailProd,
  putProduct, Varian, VarianChild, Variant,
  DetailVariant, Propose, ResponsePropose, SearchV2
} from '../../models/manage-product/manage-product';
import { Configuration } from '../../config/configuration';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ManageProductService {

  constructor(private configuration: Configuration, private http: HttpClient) { }

  getData(): Observable<ManageProduct[]> {
    return this.http.get<any>('https://jsonplaceholder.typicode.com/photos')
      .pipe(
        map(resp => resp as ManageProduct[])
      );
  }

  getDataCategoryC1(): Observable<listingCategory> {
    return this.http.get<any>(this.configuration.apiURL +
    '/manage/category?page=1&itemperpage=10&ot=asc&ob=name&type=C1&all=true')
      .pipe(
        map(resp => resp as listingCategory)
      );
  }

  getDataCategoryC2(id: any): Observable<listingCategory[]> {
    return this.http.get<any>(this.configuration.apiURL +
    '/manage/category?page=1&itemperpage=10&ot=asc&ob=name&type=C2&all=true')
      .pipe(
        map(resp => resp as listingCategory[])
      );
  }

  getDataCategoryC3(queryParams): Observable<listingCategory[]> {
    let params = new HttpParams();
    Object.keys(queryParams).forEach(function(k) {
      params = params.append(k, queryParams[k]);
    });
    return this.http.get<any>(this.configuration.apiURL +
    '/manage/category?page=1&itemperpage=10&ot=asc&ob=name&type=C3&all=true',  {params: params})
      .pipe(
        map(resp => resp as listingCategory[])
      );
  }

  getDataListing(queryParams): Observable<listingProduct> {
    let params = new HttpParams();
    Object.keys(queryParams).forEach(function(k) {
      params = params.append(k, queryParams[k]);
    });
    return this.http.get<any>(this.configuration.apiURL + '/manage/product/approval', {params: params})
      .pipe(
        map(resp => resp as listingProduct)
      );
  }

  getDetailProduct(key: string): Observable<deetailProd> {
    return this.http.get<any>(this.configuration.apiURL + '/manage/product/approval/detail/' + key)
      .pipe(
        map(resp => resp as deetailProd)
      );
  }

  getDetailById(id: any): Observable<ProductDetailList> {
    return this.http.get(this.configuration.apiURL + '/manage/product/approval/detail/' + id)
      .pipe(
        map(response => response as ProductDetailList)
      );
  }

  getData1(queryParams): Observable<ListBrand[]> {
    let params = new HttpParams();
    Object.keys(queryParams).forEach(function(k) {
      params = params.append(k, queryParams[k]);
    });
    return this.http.get<any>(this.configuration.apiURL + '/manage/brand',  {params: params})
      .pipe(
        map(resp => resp as ListBrand[])
      );
  }

  getDataListRevie(): Observable<revise[]> {
    return this.http.get(this.configuration.apiURL + '/manage/reference?code=API&isactive=true')
      .pipe(
        map(res => res as revise[])
      );
  }

  postToko(data): Observable<putProduct> {
    return this.http.put(this.configuration.apiURL + '/manage/product/approval/update', data)
      .pipe(
        map(response => response as putProduct)
      );
  }

  getListBrand(queryParams): Observable<BrandList> {
    let params = new HttpParams();
    Object.keys(queryParams).forEach(function(k) {
      params = params.append(k, queryParams[k]);
    });
    return this.http.get(this.configuration.apiURL + '/manage/brand', {params: params})
      .pipe(
        map(response => response as BrandList )
      );
  }

  postData(data) {
    return this.http.post(this.configuration.apiURL + '/manage/product/product/create', data)
      .pipe(
        map(response => response as AddProductRequest )
      );
  }
  putEditData(data) {
    return this.http.post(this.configuration.apiURL + '/manage/product/product/update', data)
      .pipe(
        map(resp => resp as AddProductRequest)
      );
  }

  getListingProductMaster(queryParams): Observable<ManageProductListing> {
    let params = new HttpParams();
    Object.keys(queryParams).forEach(function(k) {
      params = params.append(k, queryParams[k]);
    });
    return this.http.get(this.configuration.apiURL + '/manage/product/master', {params: params})
      .pipe(
        map(response => response as ManageProductListing )
      );
  }

  getListById(id): Observable<listingDetail> {
    return this.http.get(this.configuration.apiURL + '/manage/product/master/detail/' + id)
      .pipe(
        map(resp => resp as listingDetail)
      );

  }

  getListVarian(id): Observable<Varian[]> {
    return this.http.get(this.configuration.apiURL + '/manage/product/category/attribute/varian?categoryid=' + id)
      .pipe(
        map(res => res as Varian[])
      );
  }

  getListVarianChild(id): Observable<VarianChild[]> {
    return this.http.get(this.configuration.apiURL + '/manage/product/category/attribute/value/varian?attributeid=' + id)
      .pipe(
        map(res => res as VarianChild[])
      );
  }


  public getVariants(categoryId: number): Observable<Variant[]> {

    return this.http.get(this.configuration.apiURL + '/manage/product/category/attribute/value/varian',
        {
          params: {'categoryid': categoryId.toString()}
        }
      )
      .pipe(
        map(response => response as Variant[])
      );
  }

  getListVarianDetail(id): Observable<DetailVariant[]> {
    return this.http.get(this.configuration.apiURL + '/manage/product/master/varian/detail/' + id)
      .pipe(
        map(resp => resp as DetailVariant[])
      );

  }

  getListPropose(queryParams): Observable<Propose> {
    let params = new HttpParams();
    Object.keys(queryParams).forEach(function(k) {
      params = params.append(k, queryParams[k]);
    });
    return this.http.get(this.configuration.apiURL + '/product-request/', {params: params})
      .pipe(
        map(resp => resp as Propose)
      );
  }

  prosesPropose(data) {
    return this.http.post(this.configuration.apiURL + '/product-request/approved', data)
      .pipe(
        map(resp => resp as ResponsePropose)
      );
  }

  getSrcBrandV2(queryParams): Observable<SearchV2[]> {

    let params = new HttpParams();
    Object.keys(queryParams).forEach(function(k) {
      params = params.append(k, queryParams[k]);
    });

    return this.http.get(this.configuration.apiURL + '/manage/product/master/search/v2', {params: params})
      .pipe(
        map(res => res as SearchV2[])
      );
  }
}
