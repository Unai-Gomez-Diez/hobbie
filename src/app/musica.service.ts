import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Music} from "./modelos/music.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MusicaService {
  private apiUrl ="https://rememora.sitehub.es/api/v1/music/music.json"
  constructor(private http: HttpClient) { }
  getMusic(): Observable<Music[]>{
    return this.http.get<Music[]>(this.apiUrl)
  }
}
