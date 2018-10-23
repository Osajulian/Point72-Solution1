import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<div><app-characters></app-characters></div>',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pageTitle = 'Star Wars Characters';
}

