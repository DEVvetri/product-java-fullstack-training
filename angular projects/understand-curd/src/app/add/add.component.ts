import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ApiService } from '../api.service';
import { Template } from '../template';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add',
  standalone: true,
  imports: [RouterLink,FormsModule,CommonModule],
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddComponent {
  datas:any
  constructor(private service:ApiService){
    service.getAll().subscribe(data=>this.datas=data)
  }
  name:string="";
  price:number|any;

  rate:number|any;
  addData(){
   const newData:Template={
      id:this.datas.length.toString(),
      name:this.name,
      price:this.price,
      rating:this.rate
    };
    this.service.addData(newData).subscribe()
  }
}
