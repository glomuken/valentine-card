import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-greeting-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './greeting-card.component.html',
  styleUrls: ['./greeting-card.component.css']
})
export class GreetingCardComponent implements OnInit {
  fallingItems: any[] = [];
  symbols = { question: '?', heart: '❤', cross: '❌', laugh: '😂' };
  colors = { red: 'red', pink: 'pink' };

  ngOnInit() {
    this.generateFallingItems(this.symbols.question, this.colors.red);
  }

  generateFallingItems(symbol: string, color: string) {
    this.fallingItems = [];
    for (let i = 0; i < 30; i++) {
      this.fallingItems.push({
        left: Math.random() * 100 + 'vw', 
        animationDuration: (Math.random() * 5 + 5) + 's',
        animationDelay: (Math.random() * 3) + 's', 
        color: color,
        symbol: symbol
      });
    }
  }

  getItemStyle(item: any) {
    return {
      left: item.left,
      animationDuration: item.animationDuration,
      animationDelay: item.animationDelay,
      color: item.color
    };
  }

  onYesClick() {
    this.generateFallingItems(this.symbols.heart, this.colors.red);
    setTimeout(() => this.generateFallingItems(this.symbols.question, this.colors.red), 63000);
  }

  onNoClick() {
    this.generateFallingItems(this.symbols.cross, this.colors.red);
    // setTimeout(() => alert('TRY AGAIN'), 1000);
    setTimeout(() => this.generateFallingItems(this.symbols.question, this.colors.red), 5000);
  }
}
