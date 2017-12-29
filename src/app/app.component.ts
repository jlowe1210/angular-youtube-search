import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged'
import 'rxjs/add/operator/switchMap'
import {YoutubeService} from './youtube.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(public utube: YoutubeService){}

  items;

  ngOnInit(){
    this.utube.getTerm()
    .debounceTime(600)
    .distinctUntilChanged()
    .switchMap(val => this.utube.utubesearch(val))
    .subscribe(val => {
      this.items = val['items'];
    })
    this.utube.utubesearch('cats').subscribe(val => {
      this.items = val['items']
    })
  }

}
