import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Template } from './template';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ApiService {


  constructor(private http:HttpClient) {

  }
  api:string="http://localhost:3000/products"
  getAll(){
    return this.http.get(this.api);
  }

  getaData(id:number):Observable<any>{
    return this.http.get(this.api+`/${id}`)
  }

  addData(data:Template){
    return this.http.post(this.api,data)
  }

  deleteRecord(id:number){
    return this.http.delete(this.api+`/${id}`);
  }

  updateRecord(data:Template):Observable<any>{
    return this.http.put(`${this.api}/${data.id}`,data)
  }

}
