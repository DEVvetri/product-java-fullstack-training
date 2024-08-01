import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Product, ProductProjectService } from '../../product-project.service';
import { DemoTemp, MyapiService } from '../../myapi.service';

@Component({
  selector: 'app-list-products',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './list-products.component.html',
  styleUrl: './list-products.component.css'
})
export class ListProductsComponent implements OnInit {

  mydata:DemoTemp[]=[];

  constructor(private myservice:MyapiService){

  }

  ngOnInit(): void {
    this.getDatas()
  }
  index:number=0;
  getDatas(){
    this.myservice.getAllData().subscribe(
      data=>{this.mydata=data;this.index=data.id}

    )
   this.getlast()
  }

  getlast():number{
    let num:number=this.mydata.length;
    console.log(this.mydata.length);

    return num;
  }

  newid:number=this.getlast();
  newname:string="";
  age:number=0;
  city:string="";
  addNew(){
    const newdata:DemoTemp={
      id:this.mydata.length,
      age:this.age,
      name:this.newname,
      city:this.city
    }
    console.log(newdata)
    this.myservice.addData(newdata).subscribe()
    this.getDatas()
  }

  delete(id:number){
    this.myservice.deletedata(id);
    this.getDatas()
  }
}
