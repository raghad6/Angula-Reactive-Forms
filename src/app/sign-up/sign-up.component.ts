import { HttpClient  } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    name: new FormControl(''),
    email: new FormControl(''),
    gender: new FormControl(''),
    avatar: new FormControl(''),
    mobileNumber: new FormControl('')
  });

  
  onSubmit() {
    console.warn(this.profileForm.value);
    
  }

  constructor() { }

  ngOnInit(): void {
  }


  
  
  
}
