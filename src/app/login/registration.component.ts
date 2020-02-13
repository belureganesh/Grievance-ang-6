import { Component, OnInit, createPlatformFactory } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registartion',
  templateUrl: './registration.component.html'
})
export class RegistrationComponent {


  registrationGroup: FormGroup;

  constructor(private fb: FormBuilder) {
    this.createForm()
   }

  createForm(){
    this.registrationGroup = this.fb.group({
      fName: [''],
      fname: [''],
       dob: [''],
       mob_no: [''],
       branch: [''],
       year: [''],
       mail: [''],
       userId: [''],
       password: [''],
       confirm_password: ['']
    })  
   }

  ngOnInit() {
  }

}