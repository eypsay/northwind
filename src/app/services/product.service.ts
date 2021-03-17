import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'//backhande istek yapabiliriz(apicall)
//import { ProductResponseModel } from '../models/productResponseModel';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Product } from '../models/product';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  //apiUrl="https://localhost:44364/api/products/getall";
  apiUrl="https://localhost:44364/api/";

  constructor(private httpClient:HttpClient) { }

  getProducts():Observable<ListResponseModel<Product>>{
    let newPath =this.apiUrl+"products/getall";
   return this.httpClient.get<ListResponseModel<Product>>(newPath);
    // .subscribe((response)=>{
    //   //this.productResponseModel=response;
    //   this.products=response.data
    //});
      }

      getProductsByCategory(categoryID:number):Observable<ListResponseModel<Product>>{
        let newPath =this.apiUrl+"products/getbycategory?categoryId="+categoryID;
        return this.httpClient.get<ListResponseModel<Product>>(newPath);
           }
    
}
