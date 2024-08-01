import { Component } from '@angular/core';
import { ProductModule } from '../product.module';
import { FormsModule } from '@angular/forms';
import { Product, ProductProjectService } from '../../product-project.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Params, RouterLink } from '@angular/router';

@Component({
  selector: 'app-view',
  standalone: true,
  imports: [ProductModule,FormsModule,CommonModule,RouterLink],
  templateUrl: './view.component.html',
  styleUrl: './view.component.css'
})
export class ViewComponent  {

  viewproduct:any={};
  constructor(public globalClass:ProductProjectService,private route:ActivatedRoute){
  }
  id:string="";
  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.route.params.subscribe((data:Params)=>this.viewproduct=this.globalClass.products.find(a=>a.productId==Number(data['id'])));
    console.log(this.viewproduct.productName);
  }

  currentIdleft():boolean{
    if (this.viewproduct.productId===0) {
      return false;
    }else{
      return true
    }
  }
  currentIdRight():boolean{
    if (this.viewproduct.productId===this.globalClass.products.length-1) {
      return false;
    }else{
      return true
    }
  }
  addcart(){

    this.globalClass.mycart.push(this.viewproduct);
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
