import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable()
export class ApiService {
  public url="http://localhost:3000/user"
  constructor(private http:HttpClient) { }
  postemployee(data:any){
    return this.http.post<any>(this.url,data)
                .pipe(map((res:any)=>{
                  return res;
                }))
  }

  getemployee(){
    return this.http.get<any>(this.url)
                .pipe(map((res:any)=>{
                  return res;
                }))
  }

  updateemployee(data:any,id:number){
    return this.http.put<any>(this.url+'/'+id,data)
                .pipe(map((res:any)=>{
                  return res;
                }))
  }
  deleteemployee(id:number){
    return this.http.delete<any>(this.url+'/'+id)
                .pipe(map((res:any)=>{
                  return res;
                }))
  }

}