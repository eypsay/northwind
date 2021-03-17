import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'//backhande istek yapabiliriz(apicall)
//import { ProductResponseModel } from '../models/productResponseModel';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Category } from '../models/category';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  apiUrl="https://localhost:44364/api/categories/getall";

  constructor(private httpClient:HttpClient) { }

  getCategories():Observable<ListResponseModel<Category>>{
   return this.httpClient.get<ListResponseModel<Category>>(this.apiUrl);
    // .subscribe((response)=>{
    //   //this.productResponseModel=response;
    //   this.products=response.data
    //});
      }
    
}
