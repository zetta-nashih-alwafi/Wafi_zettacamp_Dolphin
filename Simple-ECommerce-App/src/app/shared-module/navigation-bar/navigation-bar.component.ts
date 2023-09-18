import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent implements OnInit {
  @Output() sectionChanged = new EventEmitter<string>();

  currentSection: string = 'homepage'

  constructor() { }

  ngOnInit(): void {
  }

  changeSection(section: string){
    this.currentSection = section;
    this.sectionChanged.emit(section)
  }

}
