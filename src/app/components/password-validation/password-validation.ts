import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-password-validation',
  imports: [CommonModule],
  templateUrl: './password-validation.html',
})
export class PasswordValidation {
  @Input() errors: any = {};
  @Input() password: boolean = false;
   

}
