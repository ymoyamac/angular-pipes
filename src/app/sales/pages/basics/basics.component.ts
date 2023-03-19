import { Component } from '@angular/core';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styles: [
  ]
})
export class BasicsComponent {
  nameLowerCase: string = 'Yael';
  nameUpperCase: string = 'YAEL';
  fullName: string = 'yaEl MoYA';

  date: Date = new Date();
  
}
