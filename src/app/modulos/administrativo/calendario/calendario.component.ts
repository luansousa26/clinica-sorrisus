import { Component, OnInit, ViewChild } from '@angular/core';
import { CalendarComponent } from 'ng-fullcalendar';
import { Options } from 'fullcalendar';
@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.scss']
})
export class CalendarioComponent implements OnInit {

  calendarOptions: Options;
  @ViewChild(CalendarComponent) ucCalendar: CalendarComponent;
  constructor() {}

  ngOnInit() {
    this.calendarOptions = {
      editable: true,
      eventLimit: false,
      locale:'pt-br',
      eventTextColor: 'red',
      header: {
        left: 'prev,next today',
        center: 'title',
        right: 'month,agendaWeek,agendaDay,listMonth'
      },
      events: []
    };
  }
  eventClick() {

  }
  updateEvent() {

  }
  clickButton() {
    
  }
}

