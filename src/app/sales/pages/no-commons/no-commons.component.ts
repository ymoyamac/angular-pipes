import { Component } from '@angular/core';

interface Mapping {
  male: string;
  female: string;
}

@Component({
  selector: 'app-no-commons',
  templateUrl: './no-commons.component.html',
  styles: [
  ]
})
export class NoCommonsComponent {

  genre: string = 'male';
  mapping = {
    'male': 'Sr',
    'female': 'Ms'
  };

  clients: string[] = ['Maria', 'Mariana', 'John', 'Joe'];
  clientMap = {
    '=0': 'There is nobody waiting for ',
    'other': 'There are # person waiting for '
  };

  changeClient(): void {
    this.genre = 'female';
  }

  decrement(): void {
    this.clients.pop();
  }
}
