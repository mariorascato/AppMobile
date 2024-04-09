import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.page.html',
  styleUrls: ['./login-form.page.scss'],
})
export class LoginFormPage implements OnInit {
  showPassword:string;
  eye:boolean;
  constructor() { 
    this.showPassword = "";
    this.eye = false
  }

  ngOnInit() {
    this.showPassword = "password";
  }
  handleLock():void{
    if(this.eye === false ){
      this.showPassword ="password"
      this.eye = true
    }
    else if(this.eye === true){
      this.showPassword = "text"
      this.eye = false
    }
  }
  
}
