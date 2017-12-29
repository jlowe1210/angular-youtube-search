import { Component, OnInit, Input } from '@angular/core';
import {YoutubeService} from '../youtube.service';

@Component({
  selector: 'app-videolist',
  templateUrl: './videolist.component.html',
  styleUrls: ['./videolist.component.css']
})
export class VideolistComponent implements OnInit {
  @Input() items;

  constructor(public utube: YoutubeService) { }

  ngOnInit() {
  }

}
