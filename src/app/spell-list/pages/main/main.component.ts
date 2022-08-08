import { Component, NgZone, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SpellListService } from 'src/app/services/spell-list.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  subscription!: Subscription;
  load: boolean = false;

  constructor(
    private spellList:  SpellListService,
    private _ngZone:    NgZone
  ) { }

  ngOnInit(): void {
    this.subscription = this.spellList.$observable.subscribe((event) => {
      this._ngZone.run(() => {
        this.load = event;
      })
    })
  }

}
