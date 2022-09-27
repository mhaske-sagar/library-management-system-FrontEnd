import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Form, FormGroup } from '@angular/forms';
export class Userdata{
  constructor(public fname:string,public lname:string,public pass1:string,public pass2:string,public email:string){}

}
export class data{
  constructor(public pass1:string,public email:string){}
}
export class Dbbook{
  constructor(public id:number,public name:string,public author:string){}
}
@Injectable({
  providedIn: 'root'
})

export class HttpserviceService {
 

  constructor(private httpclient:HttpClient) { }
getalluser()
  {
    return this.httpclient.get<Dbbook[]>("http://127.0.0.1:8000/getall");
  }
signup(users:Userdata)
{
  return this.httpclient.post<String>("http://127.0.0.1:8000/register",users)
}
login(u:data){

  return this.httpclient.post<String>("http://127.0.0.1:8000/login",u)

}
add(book:Dbbook)
{
 return this.httpclient.post<Dbbook>("http://127.0.0.1:8000/add",book)
}
view(id:number){
  return this.httpclient.get<Dbbook>("http://127.0.0.1:8000/get/"+id)
}
update(book:Dbbook)
{
   return this.httpclient.put<Dbbook>("http://127.0.0.1:8000/update ",book)
}
delete(id:number)
{
  return this.httpclient.delete<Dbbook>("http://127.0.0.1:8000/delete/"+id)
}
}
