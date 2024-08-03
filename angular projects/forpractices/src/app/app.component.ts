import { Component, Directive, ElementRef } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AddComponent } from "./product/add/add.component";
import { ListComponent } from './product/list/list.component';
import { ViewComponent } from './product/view/view.component';
import { UpdateComponent } from './product/update/update.component';
import { Product, ProductProjectService } from './product-project.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterLink,RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent{
  title = 'vvshopping';

  constructor(private globaldata:ProductProjectService){

  }
  searchFeild:string="";
  demo:any;
  searchData(){

    console.log(this.globaldata.products.filter(data=>data.productName!==this.searchFeild ));

  }

  countofcart():number{
    return this.globaldata.mycart.length
  }
}
