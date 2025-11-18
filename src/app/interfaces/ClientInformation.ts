import { PhoneInformation } from "./PhoneInformation";

export interface ClientInformation {
  id: string;
  clientNumber: string;
  completed: boolean;
  email: string;
  name: string;
  firstLastName: string;
  phone: PhoneInformation;
  secondName?: string;
  secondLastName?: string;
}