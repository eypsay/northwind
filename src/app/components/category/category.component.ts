import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categories : Category[]=[];
  //currentCategory : Category={categoryID:0,categoryName:""};
  currentCategory : Category;
  dataLoaded =false;
  constructor(private categoryService:CategoryService) { }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories(){
    // this.httpClient.get<ProductResponseModel>(this.apiUrl).subscribe((response)=>{
    //   //this.productResponseModel=response;
    //   this.products=response.data
    // });
    this.categoryService.getCategories().subscribe(response=>{
      this.categories = response.data;//products=gelen data
      this.dataLoaded=true;
    });
  }
  setCurrentCategory(category:Category) {
    
    //console.log(category.categoryName);
    this.currentCategory=category;
  }
getCurrentCategoryClass(category:Category){
  if(category==this.currentCategory){
    return "list-group-item active"
  }else{
    return  "list-group-item"
  }
}

getAllCategoryClass(){
  if(!this.currentCategory){
    return "list-group-item active"
  }else{
  return  "list-group-item"}
}
}
