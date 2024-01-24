import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Photo} from "./modelos/photo.model";

@Injectable({
  providedIn: 'root',
})
export class PhotoService {
  private apiUrl = 'URL_DEL_JSON'; // Reemplaza esto con la URL real de tu JSON

  constructor(private http: HttpClient) {}

  getPhotos(): Observable<Photo[]> {
    return this.http.get<Photo[]>(this.apiUrl);
  }
}
