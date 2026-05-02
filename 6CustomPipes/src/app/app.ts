import { DatePipe } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [DatePipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('6CustomPipes');
  currentDate = new Date();
  currentTemperatures = {
    berlin: 4.2749812,
    newYork: 18.1214,
    paris: 72.1209001,
    chicago: 65.0775238,
  };

  historicTemperatures = [
    25, 37, 19, -4, 28, 21, 19, 28, 33, 31, 9, 11, 5, -12, -5,
  ];

  constructor() {
    this.historicTemperatures.sort((a, b) => a > b ? 1 : -1);
  }

  onReset(index: number) {
    this.historicTemperatures[index] = 18;
    // const newTemps = [...this.historicTemperatures]
    // newTemps[index] = 18;
    // this.historicTemperatures = newTemps;
  }
}
