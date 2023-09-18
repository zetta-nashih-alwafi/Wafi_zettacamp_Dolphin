import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InstagramPostRoutingModule } from './instagram-post-routing.module';
import { InstagramPostComponent } from './instagram-post.component';
import { PostCardComponent } from './post-card/post-card.component';


@NgModule({
  declarations: [
    InstagramPostComponent,
    PostCardComponent,
  ],
  imports: [
    CommonModule,
    InstagramPostRoutingModule
  ],
  exports: [
    InstagramPostComponent
  ]
})
export class InstagramPostModule { }
