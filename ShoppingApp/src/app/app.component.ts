import { Component, OnChanges, OnInit, SimpleChanges, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // encapsulation: ViewEncapsulation.ShadowDom
})
export class AppComponent implements OnInit, OnChanges {
  ngOnInit(): void {
    console.log('second');

  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("first");

  }
  title = 'ShoppingApp';


}
