import { CommonModule } from '@angular/common';
import { Component, Output, EventEmitter, Input } from '@angular/core';
import { AuthService } from '../../services/AuthSessionService';
import { PhoneNumber } from '../../interfaces/PhoneNumber';
import { ApiError } from '../../interfaces/ApiError';
@Component({
  selector: 'app-register-phone',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './register-phone.html',
})
export class RegisterPhone {
  @Output()phone = new EventEmitter<string>();
  @Input() isRegisterPhoneFlag : boolean = false
  apiError : ApiError | null = null;

  constructor( private _authService: AuthService) {}

  sendPhoneNumber() {
    const inputElement = document.getElementById('number') as HTMLInputElement;
    const phoneNumber = String(inputElement.value);
    console.log(phoneNumber)
    const request : PhoneNumber = { number : phoneNumber}
    console.log(request)
    this._authService.setPhoneNumber(request).subscribe({
          next: (response) => {
            this.phone.emit(phoneNumber);
            console.log('Usuario creado con éxito:', response);
          },
          error: (error: ApiError) => {
            this.apiError = error;
            console.error('API Test Error:', error.errorCode);
          }
        });
    
  }
}
