import { HttpService } from 'src/app/services/http.service';
import { Albums } from 'src/app/interfaces/albums';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnChanges {
  constructor(private http: HttpService){}

  value:string = this.http.value

  ngOnChanges(changes: SimpleChanges): void {
  }

  @Input() mus!: Albums[];

  ngOnInit(): void {
  }

  display(genre: string){
    if (this.http.value == genre || this.http.value == null) {
      return true
    }
    else {
      return false
    }
  }



}
