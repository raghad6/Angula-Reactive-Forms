import { HttpClient  } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ValidationService } from '../services/validation.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  title = 'Forms';

  constructor(  private fb: FormBuilder,
    private validation : ValidationService,
    private http: HttpClient) { }

  ngOnInit(): void {
  }

  
  
}
