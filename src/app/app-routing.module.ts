import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MusicaComponent } from './music/musica.component';
import { VideosComponent } from './videos/videos.component';
import { FotosComponent } from './fotos/fotos.component';
import { BodyComponent } from './body/body.component';


const routes: Routes = [
  { path: "", component: BodyComponent },
  { path: "musica", component: MusicaComponent },
  { path: "videos", component: VideosComponent },
  { path: "fotos", component: FotosComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
