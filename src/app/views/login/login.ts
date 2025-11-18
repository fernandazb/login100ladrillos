import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CreateRegisterUser } from '../create-register-user/create-register-user';
import { RegisterPhone } from "../register-phone/register-phone";
import { ModalCodePhone } from "../../components/modal-code-phone/modal-code-phone";
import { UserData } from "../user-data/user-data";
import { ShowInformation } from '../show-information/show-information';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, CreateRegisterUser, RegisterPhone, ModalCodePhone, UserData, ShowInformation],
  templateUrl: './login.html'
})
export class Login implements OnInit {
  changeOption: boolean = false;
  isRegisterPhoneFlag: boolean =  false
  isCreateRegisterFlag: boolean = false
  isMenuOpen: boolean = false;
  isOpenValidate: boolean = false;
  isUSerDataFlag: boolean = false;
  isShowInformationFlag : boolean = false;
  phoneNumber: string = "";

  ngOnInit() {  
    this.changeOption = false;
    this.isCreateRegisterFlag=true
    this.isRegisterPhoneFlag=false
    this.isOpenValidate = false;
    this.isUSerDataFlag = false
    this.isShowInformationFlag = false
  }
  isRegisterPhone() {
    this.isRegisterPhoneFlag =  true
    this.isCreateRegisterFlag= false
  }
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  
  changeNava(event: boolean) {
    this.changeOption = event;
  }
  
  OpenModaleValidate(event: string ) {
    this.phoneNumber = event; 
    this.isOpenValidate = true;
  }

  closeModalValidate(event: boolean){
    if(event == false){
      this.isOpenValidate = false;
    }
    if(event == true){
      this.isOpenValidate = false;
      this.isUSerDataFlag = true
      this.isRegisterPhoneFlag =  false
    }
  }
  isShowInformation(event: boolean){
    this.isUSerDataFlag = false
    this.isShowInformationFlag =  true
  }

}
