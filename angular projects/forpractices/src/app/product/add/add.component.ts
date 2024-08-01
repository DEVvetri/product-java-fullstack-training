import { Component, OnInit } from '@angular/core';
import { ProductModule } from '../product.module';
import { FormsModule } from '@angular/forms';
import { Product, ProductProjectService } from '../../product-project.service';
import { RouterLink, RouterLinkActive } from '@angular/router';
@Component({
  selector: 'app-add',
  standalone: true,
  imports: [ProductModule,FormsModule,RouterLink,RouterLinkActive],
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddComponent implements OnInit {
  newProduct:Product|undefined;
  name:string="";
  price:string="";
  description:string="";
  image:string="";
  rating:string="";
  cetegory:string="";
  current:number|undefined;
  allProducts:Product[]=[];
  constructor( public globalClass:ProductProjectService){
    this.current=this.globalClass.products.length;
  }

  ngOnInit(): void {
    this.globalClass.getAllProducts().subscribe(data=>{this.allProducts=data; console.log(this.allProducts)})



  }
  addProduct(){
    if (this.name.length<1||this.price.length<1||this.description.length<1||this.image.length<1||this.rating.length<1||this.cetegory.length<1) {
      window.alert('enter all data');
    }
    this.newProduct = {
      productImage:this.image,
      productName:this.name,
      productContent:this.description,
      productPrice:Number(this.price),
      productId:Number(this.current)+1,
      productRating:Number(this.rating),
      productCategory:this.cetegory
    }
    this.globalClass.products.push(this.newProduct);

    // http operation
    this.newProduct = {

      productImage:this.image,
      productName:this.name,
      productContent:this.description,
      productPrice:Number(this.price),
      productId:Number(this.current),
      productRating:Number(this.rating),
      productCategory:this.cetegory
    }
    this.globalClass.addNewProdut(this.newProduct);
    this.clearData();

  }

  clearData(){
    this.name="";
  this.price="";
  this.description="";
  this.image="";
  this.rating="";
  this.cetegory="";

  }
}
