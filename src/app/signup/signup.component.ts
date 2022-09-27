import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpserviceService, Userdata } from '../service/httpservice.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
 public form!: FormGroup
 user:Userdata[]=[]
 users:Userdata=new Userdata("","","","","")


 
 
  constructor(private router:Router,private formbuilder:FormBuilder,private httpclient:HttpserviceService) { }

  ngOnInit(): void {
    this.form=this.formbuilder.group({
      fname:["",Validators.required],
      lname:["",Validators.required],
      pass1:["",Validators.required],
      pass2:["",Validators.required],
      email:["",Validators.compose([Validators.email,Validators.required])]})
  }
  go(){
    this.router.navigate([""])
  }
  goon(){
    this.router.navigate(["/system"])
  }
  

signup()
  {
    this.httpclient.signup(this.users).subscribe(response=>{
      if (response=="successful")
      {this.router.navigate(["/system"]);
      alert("registation successful")
      
      }
      else
      {  
        alert("mail id already present ")
      }
      })
      
  }
}