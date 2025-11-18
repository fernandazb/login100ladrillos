import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CreateRegisterUser } from '../create-register-user/create-register-user';
import { RegisterPhone } from "../register-phone/register-phone";
import { ModalCodePhone } from "../../components/modal-code-phone/modal-code-phone";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, CreateRegisterUser, RegisterPhone, ModalCodePhone],
  templateUrl: './login.html'
})
export class Login implements OnInit {
  changeOption: boolean = false;
  isMenuOpen = false;
  isOpenValidate: boolean = false;
  phoneNumber: number = 0;

  ngOnInit() {  
    this.changeOption = false;
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  
  changeNava(event: boolean) {
    this.changeOption = event;
  }
  
  OpenModaleValidate(event: number ) {
    this.phoneNumber = event; 
    this.isOpenValidate = true;
  }
}
