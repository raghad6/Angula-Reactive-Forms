import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  submitted = false;
  imageUrl:any;

  profileForm = new FormGroup({
    firstName: new FormControl('',[Validators.required]),
    lastName: new FormControl('',[Validators.required]),
    name: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required]),
    gender: new FormControl('',[Validators.required]),
    avatar: new FormControl('',[Validators.required]),
    number: new FormControl('' ,[Validators.required , Validators.minLength(10)]  ),
    password: new FormControl('' ,[Validators.required , Validators.minLength(6)] ),
    passwordval: new FormControl(''  ,[Validators.required , Validators.minLength(6)] ),
    
  });



  constructor() { }

  ngOnInit(): void {
  }


  get f() { return this.profileForm.controls; }

  onSubmit() {
    console.warn(this.profileForm.value);

      this.submitted = true;

      // stop here if form is invalid
      if (this.profileForm.invalid) {
          return;
      }

  }

  onReset() {
      this.submitted = false;
      this.profileForm.reset();
  }

  selectFile(event : any) {
		if(!event.target.files[0] || event.target.files[0].length == 0) {
			return;
		}
		
		var mimeType = event.target.files[0].type;
		
		if (mimeType.match(/image\/*/) == null) {
			return;
		}
		
		var reader = new FileReader();
		reader.readAsDataURL(event.target.files[0]);
		
		reader.onload = (_event) => {
			this.imageUrl = reader.result; 
		}
  }
  
  
}
