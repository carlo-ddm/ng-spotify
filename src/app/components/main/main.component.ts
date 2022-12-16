import { Component, OnInit } from '@angular/core';

import { HttpService } from 'src/app/services/http.service';

import { Albums } from 'src/app/interfaces/albums';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(private http: HttpService){}

  music!:Albums;

  ngOnInit(): void {
    this.getApi()

  }

  getApi(){
    this.http.getApi().subscribe({
      next:(data:any)=>{
        this.music = data.response
        console.log(this.music);
      },

      complete:()=>{
        console.log('complete');
      },

      error:()=>{
        console.log('error');
      }
    })
  }



}
