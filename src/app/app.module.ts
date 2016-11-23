import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material';
// other imports 
import { AppComponent } from './app.component';
import { PlayComponent } from './play/play.component';


@NgModule({
  declarations: [
    PlayComponent,
    //CardsComponent
   // DealerComponent,
    //PPlayComponent
    
  ],
  imports: [
    BrowserModule,
    MaterialModule.forRoot()
  ],
  providers: [ ],//Global scope
  bootstrap: [AppComponent]
})
export class AppModule { }
