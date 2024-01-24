import {Component, OnInit} from '@angular/core';
import {Photo} from "../modelos/photo.model";
import {PhotoService} from "../photo.service";

@Component({
  selector: 'app-fotos',
  templateUrl: './fotos.component.html',
  styleUrls: ['./fotos.component.css']
})
export class FotosComponent implements OnInit{
    fotos: Photo[] = []

  constructor(private service: PhotoService) {
  }
  ngOnInit() {
      this.service.getPhotos().subscribe((fotos)=>{
        this.fotos = fotos
      })
  }
}
