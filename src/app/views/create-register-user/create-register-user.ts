import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { SocialCards } from '../../components/social-cards/social-cards';
import { emailValidator } from '../../validators/email-validator';
import { passwordValidator } from '../../validators/password-validator'; 
import { PasswordValidation } from '../../components/password-validation/password-validation';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/AuthSessionService';  
import { LoginUp } from '../../interfaces/LoginUp';
import { Login } from '../login/login';
import { ApiError } from '../../interfaces/ApiError';

@Component({
  selector: 'app-create-register-user',
  standalone: true,
  imports: [SocialCards, ReactiveFormsModule, PasswordValidation, CommonModule],
  templateUrl: './create-register-user.html',
})
export class CreateRegisterUser implements OnInit {
  apiError : ApiError | null = null;
  form!: FormGroup;
  @Input() isCreateRegisterFlag : boolean = true;
  @Output() isValidEmail = new EventEmitter<boolean>(false);
  @Output() successfullCreate = new EventEmitter<boolean>(false);
  requirementsPassword : boolean = false;
  isEmptyPassword: boolean = false;

  constructor(private fb: FormBuilder, private _authService: AuthService) {}
  
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
  createAccount(){
    const request : LoginUp = {
      email: this.form.value.mail,
      password: this.form.value.password
    };
    this._authService.signUp(request).subscribe({
      next: (response) => {
        this.successfullCreate.emit(true);
        console.log('Usuario creado con éxito:', response);
      },
      error: (error: ApiError) => {
        this.apiError = error;
        console.error('API Test Error:', error.errorCode);
      }
    });
  }
}