import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from '../../services/AuthSessionService';
import { ClientInformation } from '../../interfaces/ClientInformation';
import { ApiError } from '../../interfaces/ApiError';

@Component({
  selector: 'app-show-information',
  imports: [CommonModule],
  templateUrl: './show-information.html',
  
})
export class ShowInformation implements OnInit  {
  @Input() isShowInformationFlag: boolean = false 
  apiError: ApiError | null =null;
  informationClient: ClientInformation | null =null;

  constructor( private _authService: AuthService) {}
  
  ngOnInit() {  
    this._authService.getProfile().subscribe({
      next: (response: ClientInformation) => {
      this.informationClient = response
      console.log(this.informationClient);
      console.log(this.informationClient.name);
      console.log(this.informationClient.firstLastName);
      console.log('Usuario creado con éxito:', response);
      },
        error: (error: ApiError) => {
          this.apiError = error;
          console.error('API Test Error:', error.errorCode);
        }
      });
  }

}
