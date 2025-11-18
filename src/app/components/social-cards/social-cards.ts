import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-social-cards',
  imports: [],
  standalone: true,
  templateUrl: './social-cards.html',
  
})
export class SocialCards {
  @Input() image: string = '';
}
