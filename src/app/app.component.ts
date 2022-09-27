import { Component, OnInit } from '@angular/core';
import { Dbbook, HttpserviceService } from './service/httpservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'libraryMS'; 
  showme:boolean=true
  down:boolean=true
  b:Dbbook[]=[]
 
  constructor(private httpclient:HttpserviceService){}
  
  ngOnInit(): void {
   
    
          this.getalluser()
    }
   getalluser():void
   {
     this.httpclient.getalluser().subscribe(response=>this.b=response);
   }
   gg(){
    this.showme=!this.showme
    this.down=!this.down
   }
}
