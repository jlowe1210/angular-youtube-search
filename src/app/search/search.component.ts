import { Component, OnInit } from '@angular/core';
import {YoutubeService} from '../youtube.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(public utube: YoutubeService) { }

  ngOnInit() {
  }

}
