import { Component } from '@angular/core';
import { IpcServiceService } from './services/ipc-service.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'spellbook';

  constructor( ){}

}
