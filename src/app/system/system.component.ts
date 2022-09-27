import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { data, HttpserviceService } from '../service/httpservice.service';

@Component({
  selector: 'app-system',
  templateUrl: './system.component.html',
  styleUrls: ['./system.component.css']
})
export class SystemComponent implements OnInit {
  public form!: FormGroup
  u:data=new data("","")
  
  constructor(private navigate:Router, private formbuilder:FormBuilder,private httpclient:HttpserviceService) {
    
   }

  ngOnInit(): void {
    this.form=this.formbuilder.group({
      
      pass1:["",Validators.required],
      email:["",Validators.compose([Validators.email,Validators.required])]})
  }
  signup(){
    this.navigate.navigate(["/signup"])

  }

  login(){
    
    this.httpclient.login(this.u).subscribe(response=>{
      if (response=="login")
      {this.navigate.navigate(["/books"]);
      alert("login successful")
      
      }
      else
      {  
        alert("does not exit")
      }
      })
    }
  }
