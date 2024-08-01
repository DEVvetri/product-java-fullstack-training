import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-property-binding',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './property-binding.component.html',
  styleUrl: './property-binding.component.css'
})
export class PropertyBindingComponent {
  task:string="";
  listtodo:string[]=["task1","task2","task3","task4"];
  isupdate:boolean=false;
  
  setVAlue(name:any){
    this.task=(name.target as HTMLInputElement).value;
  }

  addtodo(){
    if (this.task!=="") {
    this.listtodo.push(this.task);
    this.task="";
    } else {
      alert("Enter the value");
    }
  }

  deletetodo(task:string){
    const index = this.listtodo.indexOf(task);
    this.listtodo.splice(index,1);
  }

  clearAll(){
    while (this.listtodo.length!=0) {
      this.listtodo.pop();
    }
  }

  toggleer( ){
    this.isupdate=!this.isupdate;
  }
}
