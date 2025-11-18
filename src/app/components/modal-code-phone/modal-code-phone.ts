import { CommonModule } from '@angular/common';
import { Component, Output, EventEmitter, Input } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms'
import { AuthService } from '../../services/AuthSessionService';
import { PhoneNumberResponse } from '../../interfaces/PhoneNumberResponse';
import { ApiError } from '../../interfaces/ApiError';

@Component({
  selector: 'app-modal-code-phone',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './modal-code-phone.html',
})
export class ModalCodePhone {
  @Input() isOpenValidate: boolean = true;
  @Input() phoneNumber: string = "";
  @Output() onValidate = new EventEmitter<boolean>();
  apiError: ApiError | null =null;
  constructor( private _authService: AuthService) {}

  code: string[] = ['', '', '', ''];

  handleInput(event: any, index: number) {
    console.log(event);
    console.log(index);
    let digit: string = event.target.value || '';
    digit = digit.replace(/[^0-9]/g, '');
    digit = digit.slice(0, 1);
    event.target.value = digit;
    this.code[index] = digit;
    if (digit && index < 3) {
      const nextInput = document.getElementById(`code-${index + 1}`);
      nextInput?.focus();
    }
  }

  handleBackspace(event: any, index: number) {
    if (event.key === 'Backspace' && !event.target.value && index > 0) {
      const previous = document.getElementById(`code-${index - 1}`);
      previous?.focus();
    }
  }

  validateCode() {
    const finalCode = this.code.join('');
    const request: PhoneNumberResponse ={
      token: finalCode
    }
    this._authService.verifyPhoneNumber(request).subscribe({
              next: (response) => {
                this.onValidate.emit(true);
                console.log('Usuario creado con éxito:', response);
              },
              error: (error: ApiError) => {
                this.apiError = error;
                console.error('API Test Error:', error.errorCode);
                this.onValidate.emit(false);
              }
            });

  }
  CloseModal(){

  }
}