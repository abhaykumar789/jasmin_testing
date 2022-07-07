import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  name='abhay';
  username='userabhay';
  
  getusername(input:any){
    var output=input+" "+this.username;
    return output;
  }

  myform: FormGroup;
  constructor() {
    this.myform = new FormGroup({
      uname: new FormControl(""),
      pwd: new FormControl("")
    });
   }

  ngOnInit(): void {
  }

  check() {
    console.log(this.myform.value);
  }

}
