import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Simple-ECommerce-App';
  section: string = 'homepage'

  changeSection(section: string): void {
    this.section = section;
  }
}
