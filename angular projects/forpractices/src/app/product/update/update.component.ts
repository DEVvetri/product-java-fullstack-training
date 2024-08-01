import { Component, Input, input, OnInit } from '@angular/core';
import { ProductModule } from '../product.module';
import { FormsModule } from '@angular/forms';
import { Product, ProductProjectService } from '../../product-project.service';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-update',
  standalone: true,
  imports: [ProductModule,FormsModule,RouterLink],
  templateUrl: './update.component.html',
  styleUrl: './update.component.css',
})
export class UpdateComponent {


  updateproduct:any={};
  constructor(public globalClass:ProductProjectService,private route:ActivatedRoute){
  }
  id:string="";
  ngOnInit(): void {

    this.id=this.route.snapshot.params['id'];
    this.updateproduct=this.globalClass.products[Number(this.id)]
  }


   updateProduct( ){
    // this.globalClass.updateProduct(this.id,this.updateproduct)

    this.globalClass.products[Number(this.id)]=this.updateproduct;
   }
}
