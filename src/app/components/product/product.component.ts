import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product';
//import { ProductResponseModel } from 'src/app/models/productResponseModel';
import { ProductService } from 'src/app/services/product.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  /* product1: any = {
    productId: 1,
    productName: 'Bardak',
    categoryId: 1,
    unitPrice: 5,
  };
  product2: any = {
    productId: 2,
    productName: 'Laptop',
    categoryId: 1,
    unitPrice: 5,
  };
  product3: any = {
    productId: 3,
    productName: 'Mouse',
    categoryId: 1,
    unitPrice: 5,
  };
  product4: any = {
    productId: 4,
    productName: 'Keyboadr',
    categoryId: 1,
    unitPrice: 5,
  };
  product5: any = {
    productId: 5,
    productName: 'Camera',
    categoryId: 1,
    unitPrice: 5,
  }; 

  products:any = [
    this.product1,
    this.product2,
    this.product3,
    this.product4,
    this.product5,
  ];
  */

  products:Product[]=[];
  dataLoaded =false;
  filterText="";
  //apiUrl="https://localhost:44364/api/products/getall";
  // productResponseModel:ProductResponseModel={
  //   data : this.products,
  //   message:"",
  //   success:true
  // };
  constructor(private productService:ProductService, private activatedRoute:ActivatedRoute)//service kullananbilmek icin yapmamız greken kod
   { }

  ngOnInit(): void {
   /*  //console.log("Inıt Calisti");
    this.getProducts();
    this.getProductsByCategory; */
      this.activatedRoute.params.subscribe(params => {
        if (params["categoryID"]){
          this.getProductsByCategory(params["categoryID"])
        }else{
          this.getProducts();
        }
      })
  }

  getProducts(){
// this.httpClient.get<ProductResponseModel>(this.apiUrl).subscribe((response)=>{
//   //this.productResponseModel=response;
//   this.products=response.data
// });
this.productService.getProducts().subscribe(response=>{
  this.products = response.data;//products=gelen data
  this.dataLoaded=true;
});
console.log()

  }

  
  getProductsByCategory(categoryID:number){
    this.productService.getProductsByCategory(categoryID).subscribe(response=>{
      this.products = response.data;
      this.dataLoaded=true;
    });
    console.log()
    
      }

}
