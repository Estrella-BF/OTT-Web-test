import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MovieDetailComponent } from './pages/movie-detail/movie-detail.component';
import { PlayerComponent } from './pages/player/player.component';
import { SearchComponent } from './pages/search/search.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'search', component:SearchComponent},
  {path: 'movie/:id', component:MovieDetailComponent},
  {path: 'player', component: PlayerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
