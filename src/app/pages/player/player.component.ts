import { Component } from '@angular/core';
import { VgApiService } from '@videogular/ngx-videogular/core';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent {
  api: VgApiService = {} as VgApiService;

/*   onPlayClick() {
    this.api.play()
  } */

  onPlayerSet(api: VgApiService){
    this.api = api
  }
}
