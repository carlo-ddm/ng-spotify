import { Injectable } from '@angular/core';

// Http Client
import { HttpClient } from '@angular/common/http';

// Interfaces
import { Albums } from '../interfaces/albums';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  endpoint = 'https://flynn.boolean.careers/exercises/api/array/music';

  value!:string;

  music:Albums[] = [];

  // Concettualente, è nel servizio che avviene la chiamata
  getApi():Observable<Albums[]>{
    return this.http.get<Albums[]>(this.endpoint)
  }
}
