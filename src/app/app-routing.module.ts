import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BooksComponent } from './books/books.component';
import { SignupComponent } from './signup/signup.component';
import { SystemComponent } from './system/system.component';

const routes: Routes = [
  {path:"books",component:BooksComponent},
  {path:"system",component:SystemComponent},
  {path:"signup",component:SignupComponent},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
