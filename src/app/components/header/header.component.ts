import { HttpService } from 'src/app/services/http.service';
import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private http: HttpService){}

  logo:string = 'logo-small.svg'

  // Importo il genere per l'iterazione
  @Input() genres!:string;

  value: any;

  ngOnInit(): void {
    console.log('PROPS --> ',this.genres);
  }

  getValue(value: string){

    if (value != 'Scegli il genere') {
      this.value = value
      this.http.value = this.value;
    } else {
      this.value = null
      this.http.value = this.value;

    }
    // console.log(this.value);
    console.log('Service Value: ',this.http.value);
  }

}
