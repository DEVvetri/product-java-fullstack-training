import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ApiService } from '../api.service';
import { Template } from '../template';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-update',
  standalone: true,
  imports: [RouterLink,FormsModule,CommonModule],
  templateUrl: './update.component.html',
  styleUrl: './update.component.css'
})
export class UpdateComponent implements OnInit {

  datas:Template={
    id:"",
    name:"",
    price:0,
    rating:0
  }

  constructor(private service:ApiService,private router:ActivatedRoute){


  }
  id:number=0;
  ngOnInit(): void {
    this.router.paramMap.subscribe(params=>this.id=Number(params.get("id")));
    this.getUpdateData(this.id);
  }
  getUpdateData(id:number){
    this.service.getaData(id).subscribe((data)=>this.datas=data)
    console.log(this.datas);

  }

  updateData(){
    this.service.updateRecord(this.datas).subscribe()
  }
}
