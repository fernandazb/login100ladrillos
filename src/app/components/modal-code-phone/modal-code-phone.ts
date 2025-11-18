import { CommonModule } from '@angular/common';
import { Component, Output, EventEmitter, input, Input } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms'

@Component({
  selector: 'app-modal-code-phone',
  imports: [CommonModule, FormsModule],
  templateUrl: './modal-code-phone.html',
})
export class ModalCodePhone {
  @Input() isOpenValidate: boolean = false;
  @Input() phoneNumber: number = 0;
  @Output() onValidate = new EventEmitter<string>();

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
    this.onValidate.emit(finalCode);
  }
}