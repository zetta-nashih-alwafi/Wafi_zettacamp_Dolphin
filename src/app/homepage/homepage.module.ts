import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomepageRoutingModule } from './homepage-routing.module';
import { PostCardComponent } from './post-card/post-card.component';
import { HomepageComponent } from './homepage.component';
import { InstagramStoryModule } from '../instagram-story/instagram-story.module';
import { NavigationBarModule } from '../navigation-bar/navigation-bar.module';


@NgModule({
  declarations: [
    PostCardComponent,
    HomepageComponent,
  ],
  imports: [
    CommonModule,
    HomepageRoutingModule,
    InstagramStoryModule,
    NavigationBarModule
  ],
  exports: [
    HomepageComponent
  ]
})
export class HomepageModule { }
