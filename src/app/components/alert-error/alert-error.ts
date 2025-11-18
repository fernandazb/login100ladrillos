import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-alert-error',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './alert-error.html',
})
export class AlertError {
  @Input() mostrarAlerta =false;
  @Input() mensajeAlerta = "";
  @Input() tipoAlerta: 'success' | 'error' | 'warning' = 'success';
}
