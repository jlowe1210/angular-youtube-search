import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import {DomSanitizer,SafeResourceUrl,} from '@angular/platform-browser';
import {YoutubeService} from '../youtube.service';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit, OnChanges {

  @Input() items;
  title: string;
  description: string;

  src;

  constructor( private sanitizer: DomSanitizer, public utube: YoutubeService) { }

  ngOnChanges(changes: SimpleChanges){
    if(changes.items.currentValue && changes.items.currentValue.length !== 0){
      
    this.title = changes.items.currentValue[0].snippet.title;
    this.description = changes.items.currentValue[0].snippet.description;
    
    this.src = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + changes.items.currentValue[0].id.videoId)
    }else{
      this.title = '';
      this.description = '';
      this.src = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + 'TetN3li3Lfg')
    }
  }

  ngOnInit() {
    this.utube.video$.subscribe(val => {
      this.title = val.snippet.title;
      this.description = val.snippet.description;
      this.src = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + val.id.videoId)
    })
  }

}
