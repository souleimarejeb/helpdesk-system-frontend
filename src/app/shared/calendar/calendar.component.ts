import { Component } from '@angular/core';
import { CommonModule, TitleCasePipe, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [CommonModule, TitleCasePipe, NgFor, NgIf],
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent {
  currentDate: Date = new Date();
  weeks: number[][] = [];
  selectedDay: number | null = null;

  constructor() {
    this.generateCalendar();
  }

  get monthName(): string {
    return this.currentDate.toLocaleString('default', { month: 'long' });
  }

  get year(): number {
    return this.currentDate.getFullYear();
  }

  previousMonth() {
    this.currentDate.setMonth(this.currentDate.getMonth() - 1);
    this.generateCalendar();
    this.selectedDay = null; // reset selection when changing month
  }

  nextMonth() {
    this.currentDate.setMonth(this.currentDate.getMonth() + 1);
    this.generateCalendar();
    this.selectedDay = null; // reset selection when changing month
  }

  selectDay(day: number) {
    this.selectedDay = day;
  }

  generateCalendar() {
    const year = this.currentDate.getFullYear();
    const month = this.currentDate.getMonth();

    const firstDay = new Date(year, month, 1).getDay(); // dim = 0
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    let day = 1;
    this.weeks = [];

    for (let i = 0; i < 6; i++) {
      const week: number[] = [];
      for (let j = 0; j < 7; j++) {
        const cellIndex = i * 7 + j;
        const adjustedFirstDay = firstDay === 0 ? 6 : firstDay - 1; // commencer par lundi
        if (cellIndex >= adjustedFirstDay && day <= daysInMonth) {
          week.push(day++);
        } else {
          week.push(0); 
        }
      }
      this.weeks.push(week);
      if (day > daysInMonth) break;
    }
  }
}
