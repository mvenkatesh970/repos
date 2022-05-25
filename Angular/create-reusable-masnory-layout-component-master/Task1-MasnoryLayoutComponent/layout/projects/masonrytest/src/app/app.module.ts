import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MasonryModule } from 'projects/masonry/src/public-api';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MasonryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
