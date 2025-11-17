import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CreateRegisterUser } from '../create-register-user/create-register-user';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, CreateRegisterUser],
  templateUrl: './login.html'
})
export class Login implements OnInit {
  changeOption: boolean = false;
  isMenuOpen = false;

  ngOnInit() {  
    this.changeOption = false;
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  
  changeNava(event: boolean) {
    this.changeOption = event;
  }
}
