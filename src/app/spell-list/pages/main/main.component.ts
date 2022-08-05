import { Component, OnInit } from '@angular/core';
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

  constructor(private spellList: SpellListService) { }

  ngOnInit(): void {
    this.subscription = this.spellList.$observable.subscribe((event) => {

      this.load = event;
      console.log(this.load);
    })
  }

}
