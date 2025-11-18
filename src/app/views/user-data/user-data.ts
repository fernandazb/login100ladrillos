import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../services/AuthSessionService';
import { ProfileName } from '../../interfaces/ProfileName';
import { ApiError } from '../../interfaces/ApiError';
@Component({
  selector: 'app-user-data',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './user-data.html',
  standalone: true,
})
export class UserData {
apiError: ApiError| null = null
@Input() isUserDataFlag: boolean = false
@Output() successfullProfileUser = new EventEmitter<boolean>(false);
form!: FormGroup;
constructor(private fb: FormBuilder, private _authService: AuthService) {}
  ngOnInit() {
    this.form = this.fb.group({
      name: ['', [Validators.required]],
      secondName: ['', ],
      firstLastName: ['', [Validators.required]],
      secondLastName: ['', ]
    });
  }
  createInformationUser(){
    const request : ProfileName = {
      name : this.form.value.name,
      secondName: this.form.value.secondName,
      firstLastName: this.form.value.firstLastName,
      secondLastName: this.form.value.secondLastName
    }
    this._authService.setProfileName(request).subscribe({
          next: (response) => {
            this.successfullProfileUser.emit(true)
            console.log('Usuario creado con éxito:', response);
          },
          error: (error: ApiError) => {
            this.apiError = error;
            console.error('API Test Error:', error.errorCode);
          }
        });

  }
}
