import { JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

export interface DemoTemp{
  id: number;
  age:number;
  name: string;
  city:string
}


@Injectable({
  providedIn: 'root'
})
export class MyapiService {

  constructor(private http:HttpClient) { }
  myurl:string="http://localhost:3000/demo";
  getAllData():Observable<any>{
    return this.http.get<DemoTemp>(this.myurl).pipe(map(data=>{return data}));
  }
  // not working
  getaData(id:number):Observable<any>{
    return this.http.get(this.myurl+`/${id}`)
  }

  addData(send:any){

    return this.http.post(this.myurl,send)
  }

  deletedata(id:number){

    return this.http.delete(this.myurl+`/${id}`).subscribe()
  }
}
