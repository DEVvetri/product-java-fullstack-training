import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Template } from '../template';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [FormsModule,CommonModule,RouterLink],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements OnInit {
  constructor(private service:ApiService,private router:ActivatedRoute){

  }

  ngOnInit(): void {
    this.loadData()
    this.router.params.subscribe();

  }
  fectedData:any;
  loadData(){
    this.service.getAll().subscribe(data=>this.fectedData=data)
  }
  popData(id:number){
    this.service.deleteRecord(id).subscribe();
    this.reload()
  }
  reload(){

  }
}
