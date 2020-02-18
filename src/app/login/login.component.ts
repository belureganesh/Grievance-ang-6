import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  loginGroup: FormGroup;

  constructor(private fb: FormBuilder) { 
    this.createForm()
  }

  createForm(){
    this.loginGroup = this.fb.group({
      user_type:['',Validators.required], 
      uname:['',Validators.required], 
      pass:['',Validators.required]
    })
  }

  ngOnInit() {
  }

  login() { }

}
