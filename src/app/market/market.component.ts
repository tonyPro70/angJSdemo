import { Component, OnInit } from '@angular/core';

import { CollectableService } from "../shared/collectable.service";
import { Collectable } from "../shared/collectable.model";

@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styles: [],//nedded?
 // providers: [ CollectableService ] exclusive scope

})
export class MarketComponent implements OnInit {
  collectables: Collectable[] = [];
  
  onAddToCollection(item: Collectable) {
   //add services
   this.collectableService.addToCollection(item);

  }
  constructor(private collectableService: CollectableService ) { }

  ngOnInit() {
    this.collectables = this.collectableService.getCollectables();
    }

  }
