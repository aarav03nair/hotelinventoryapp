import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'hinv-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{
  email:string='';
  password:string='';
  constructor(private route: Router,private loginService:LoginService){

  }
  ngOnInit(): void {
    
  }
  // Login(){
  //   if(this.email==="admin@gmail.com" && this.password==="Admin"){
  //     // alert("login sucesfull")
  //     this.route.navigate(['/rooms','add'])
  //   }
  // }
  Login(){
    if(this.loginService.Login(this.email,this.password)){
      // alert("login sucesfull")
      this.route.navigate(['/rooms'])
    }
  }
}
