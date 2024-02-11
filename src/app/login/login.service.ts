import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  isLoggedIn:boolean=false;
  isAdmin:boolean=false;
  constructor() { }

  Login(email:string,password:string){
    if(email==="admin@gmail.com" && password==="Admin"){
      this.isAdmin=true;
      this.isLoggedIn=true;
    }
    if(email==="user@gmail.com" && password==="user"){
      this.isAdmin=false;
      this.isLoggedIn=true;
    }
    return this.isLoggedIn;
  }
}
