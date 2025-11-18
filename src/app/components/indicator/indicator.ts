import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-indicator',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './indicator.html',
})
export class Indicator implements OnInit {
  @Input() totalItems: number = 4;
  @Input() activeIndex: number = 0 
  indicators: number[] = [];

  constructor() { }

  ngOnInit(): void {
    this.indicators = Array(this.totalItems).fill(0).map((x, i) => i);
  }

  isActive(index: number): boolean {
    return index === this.activeIndex;
  }
}