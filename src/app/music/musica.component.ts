import { Component } from '@angular/core';
import {Music} from "../modelos/music.model";
import {MusicaService} from "../musica.service";

@Component({
  selector: 'app-musica',
  templateUrl: './musica.component.html',
  styleUrls: ['./musica.component.css']
})
export class MusicaComponent {
    musicas: Music[] = []

  constructor(private service: MusicaService) {
  }
  ngOnInit(){
      this.service.getMusic().subscribe((musica)=>{
        this.musicas=musica
    }
      )
  }
}
