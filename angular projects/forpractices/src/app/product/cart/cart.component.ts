import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductProjectService } from '../../product-project.service';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [FormsModule,CommonModule,RouterLink,RouterLinkActive],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  constructor(public globalClass:ProductProjectService){

  }
  removeProduct(value:number){
    console.log(value);

    this.globalClass.mycart=this.globalClass.mycart.filter(data=> data.productId !=value)
 }

 totalCost():number{
  var tot:number=0;
  this.globalClass.mycart.forEach(element => {
    tot+=element.productPrice
  });
  return tot
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
