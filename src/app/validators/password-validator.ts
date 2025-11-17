import { AbstractControl, ValidationErrors } from '@angular/forms';

export function passwordValidator(control: AbstractControl): ValidationErrors | null {
  const password = control.value as string;
  const errors: ValidationErrors = {};
  if (!password) return null;
 
  if (password.length < 6) errors['minLength'] = true;

  if (!/\d/.test(password)) errors['hasNumber'] = true;

  if (!/[!\"#\$%&\/=\?@\.\[\]\{\}\(\)\*\+\-\:\;,\<\>\_\^\~]/.test(password))
    errors['hasSpecial'] = true;

  if (/100ladrillos/i.test(password)) errors['forbiddenPhrase'] = true;

  if (/(.)\1\1/.test(password)) errors['repeatedChars'] = true;

  if (isSequential(password)) errors['sequential'] = true;

  return Object.keys(errors).length ? errors : null;
}

function isSequential(txt: string): boolean {
  for (let i = 0; i < txt.length - 2; i++) {
    const a = txt.charCodeAt(i);
    const b = txt.charCodeAt(i + 1);
    const c = txt.charCodeAt(i + 2);

    if (b === a + 1 && c === b + 1) return true;
  }
  return false;
}