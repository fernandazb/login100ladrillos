import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { SocialCards } from '../../components/social-cards/social-cards';
import { emailValidator } from '../../validators/email-validator';
import { passwordValidator } from '../../validators/password-validator'; 
import { PasswordValidation } from '../../components/password-validation/password-validation';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create-register-user',
  standalone: true,
  imports: [SocialCards, ReactiveFormsModule, PasswordValidation, CommonModule],
  templateUrl: './create-register-user.html',
})
export class CreateRegisterUser implements OnInit {

  form!: FormGroup;
  @Output() isValidEmail = new EventEmitter<boolean>(false);
  requirementsPassword : boolean = false;
  isEmptyPassword: boolean = false;

  constructor(private fb: FormBuilder) {}
  
  get passwordErrors() {
    this.isEmptyPassword=this.form.get('password')?.value.length === 0;
   return this.form.get('password')?.errors || {};
  }

  ngOnInit() {
    this.form = this.fb.group({
      mail: ['', [Validators.required, emailValidator]],
      password: ['', [passwordValidator]]

    });
    this.requirementsPassword = false;
  }

  registerCreateUser() {
    if (this.form.invalid) {
      console.log("Formulario inválido");
      this.isValidEmail.emit(false)
      this.requirementsPassword = false;
      return;
    } 
    else{
      this.isValidEmail.emit(true)
      this.requirementsPassword = true;
    }
  }

}