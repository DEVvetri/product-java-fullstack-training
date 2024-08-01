import { Component, OnInit } from '@angular/core';
import { ProductModule } from '../product.module';
import { FormsModule } from '@angular/forms';
import { Product, ProductProjectService } from '../../product-project.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink, RouterLinkActive } from '@angular/router';
@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ProductModule,FormsModule,CommonModule,RouterLink,RouterLinkActive],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent  {

  constructor(public globalClass:ProductProjectService,private rout:ActivatedRoute){

  }

  // ngOnInit(): void {

  //     this.globalClass.getAllProducts().subscribe((data )=> {
  //       this.laptops=data
  //     })
  // }


  lsitcomponent:string="";
   deleteProduct(value:number){
    // this.globalClass.deleteProduct(value)
      this.globalClass.products=this.globalClass.products.filter(data=> data.productId!=value)
   }

  
   addcart(temp:Product){
    this.globalClass.mycart.push(temp);
   }

   generateStar(rating:number):HTMLElement[]{
    let arr:HTMLElement[]=[];
    const starElement=document.createElement("i");
    starElement.classList.add("bi");
    starElement.classList.add("bi-star-fill");
    for (let i = 0; i < rating; i++) {
      arr.push(starElement);

    }
    return arr;
   }

}
