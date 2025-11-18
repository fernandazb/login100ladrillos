import { Component, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-register-phone',
  imports: [],
  templateUrl: './register-phone.html',
})
export class RegisterPhone {
  @Output()phone = new EventEmitter<number>();

  sendPhoneNumber() {
    const inputElement = document.getElementById('number') as HTMLInputElement;
    console.log(inputElement)
    const phoneNumber = Number(inputElement.value);
    this.phone.emit(phoneNumber);
  }
}
