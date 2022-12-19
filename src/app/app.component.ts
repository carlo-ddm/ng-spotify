import { Component, Input } from '@angular/core';
import { Albums } from 'src/app/interfaces/albums';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-spotify';

  constructor(private http: HttpService){}

  music:Albums[] = [];

  genres:any = [];

  ngOnInit(): void {
    this.getApi();
  }

  getApi(){
    this.http.getApi().subscribe({
      next:(data:any)=>{
        this.music = data.response
        console.log(this.music);
        this.getGenre()
      },

      complete:()=>{
        console.log('complete');
      },

      error:()=>{
        console.log('error');
      }
    })
  }

  getGenre(){
    this.genres.push('Scegli il genere')
    for (let i = 0; i < this.music.length; i++) {
      if (!this.genres.includes(this.music[i].genre)) {
        this.genres.push(this.music[i].genre)
        console.log(this.genres);
      }
    }
  }
}
