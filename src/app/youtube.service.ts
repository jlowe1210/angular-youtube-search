import { Injectable } from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {HttpClient, HttpParams} from '@angular/common/http';

@Injectable()
export class YoutubeService {

  constructor(private http: HttpClient) { }

  key = 'AIzaSyAR7jWuBvZqIX9ZriIotk4ZhcTIip8arSo'

  term$ = new Subject<string>();
  video$ = new Subject<any>();


  getTerm(){
    return this.term$.asObservable();
  }

  utubesearch(term){
    const params = new HttpParams({
      fromObject: {
        part: 'snippet',
        type: 'video',
        q: term,
        key: this.key
      }
    })
    return this.http.get('https://www.googleapis.com/youtube/v3/search', {params})
  }

}
