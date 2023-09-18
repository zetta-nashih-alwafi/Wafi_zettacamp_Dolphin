import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InstagramStoryRoutingModule } from './instagram-story-routing.module';
import { StoryCardComponent } from './story-card/story-card.component';
import { InstagramStoryComponent } from './instagram-story.component';


@NgModule({
  declarations: [
    StoryCardComponent,
    InstagramStoryComponent
  ],
  imports: [
    CommonModule,
    InstagramStoryRoutingModule
  ],
  exports: [
    InstagramStoryComponent
  ]
})
export class InstagramStoryModule { }
