import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { ColumCardModule } from './colum-card/colum-card.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ColumCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
