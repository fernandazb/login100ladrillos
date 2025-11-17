import { AbstractControl, ValidationErrors } from '@angular/forms';

export function emailValidator(control: AbstractControl): ValidationErrors | null {
  const value = control.value;

  if (!value) return null; // permite campo vacío si no es requerido

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/;

  return emailRegex.test(value) ? null : { emailInvalido: true };
}