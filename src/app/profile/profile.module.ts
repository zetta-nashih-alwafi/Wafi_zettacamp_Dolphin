import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { PostComponent } from './post/post.component';
import { SavedComponent } from './saved/saved.component';
import { TaggedComponent } from './tagged/tagged.component';
import { InstagramPostModule } from '../instagram-post/instagram-post.module';


@NgModule({
  declarations: [
    ProfileComponent,
    PostComponent,
    SavedComponent,
    TaggedComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    InstagramPostModule
  ],
  exports: [
    ProfileComponent
  ]
})
export class ProfileModule { }
