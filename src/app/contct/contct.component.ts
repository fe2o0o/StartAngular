import { Component } from '@angular/core';
import { FormBuilder, FormGroup , Validators } from '@angular/forms';

@Component({
  selector: 'app-contct',
  templateUrl: './contct.component.html',
  styleUrls: ['./contct.component.css']
})
export class ContctComponent {

  myForm: FormGroup;

  constructor(public formBuilder : FormBuilder) {
    this.myForm = this.formBuilder.group({
      name: ['', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(20)
      ]],
      email: ['', [
        Validators.required,
        // Validators.pattern('([a-z]|[A-Z])+(\w)*@[a-z]+\.[a-z]+')
        Validators.email
      ]],
      phone: ['', [
        Validators.required,
        Validators.pattern('01[0-9]{9}')
      ]]
    })
  }
}
