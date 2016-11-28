import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
// other imports 

import { AppComponent } from './app.component';
import { MarketComponent } from './market/market.component';
import { CollectionComponent } from './collection/collection.component';
import { CollectableService } from './shared/collectable.service';
//import { CardsComponent } from './cards/cards.component';
//import { DealerComponent } from './dealer/dealer.component';
//import { PPlayComponent } from './p-play/p-play.component';
import { HeaderComponent } from './header.component';
import { routing } from './app.routing';


@NgModule({
  declarations: [
    AppComponent,
    MarketComponent,
    CollectionComponent,
    HeaderComponent
    //CardsComponent,
   // DealerComponent,
    //PPlayComponent
    
  ],
  imports: [
    BrowserModule,
    //HttpModule,//needed?
    routing,
    MaterialModule.forRoot()
  ],
  providers: [ CollectableService ],//Global scope
  bootstrap: [AppComponent]
})
export class AppModule { }
