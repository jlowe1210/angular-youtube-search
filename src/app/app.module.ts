import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { NgModule } from '@angular/core';

import {YoutubeService} from './youtube.service';


import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { VideoComponent } from './video/video.component';
import { VideolistComponent } from './videolist/videolist.component';
import { VideoitemComponent } from './videoitem/videoitem.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    VideoComponent,
    VideolistComponent,
    VideoitemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [YoutubeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
