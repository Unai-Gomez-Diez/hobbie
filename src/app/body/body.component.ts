import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {
  images: string[] = [
    'assets/image/music.jpg',
    'assets/image/camera.jpg',
    'assets/image/video.jpg'
  ];

  texts: string[] = [
    'Musica',
    'Fotos',
    'Videos'
  ];
}
