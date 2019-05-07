import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
// import { NumberDirective } from './core/directives/numbers-only.directive';

@NgModule({
  declarations: [
    AppComponent,
    // NumberDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
