import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Dbbook, HttpserviceService } from '../service/httpservice.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
 public form!:FormGroup
book:Dbbook=new Dbbook(0,"","")
b:Dbbook[]=[]


  constructor(private router:Router,private formbuilder:FormBuilder,private httpclient:HttpserviceService) { }

  ngOnInit(): void {
    this.form=this.formbuilder.group({
      id:["",Validators.required],
      name:["",Validators.required],
      author:["",Validators.required],
      })
      
      this.getalluser()
  }
  getalluser():void
  {
    this.httpclient.getalluser().subscribe(response=>{this.b=response;this.getalluser();});
  }
 
  
    
    
    
    
  
Add()
{
 this.httpclient.add(this.book).subscribe(response=>{this.book=response;})
}
View()
{
  this.httpclient.view(this.book.id).subscribe(response=>this.book=response)
}
Update()
{
  this.httpclient.update(this.book).subscribe(response=>this.book=response)
}
Delete()
{
  this.httpclient.delete(this.book.id).subscribe(response=>this.book=response)
}

}