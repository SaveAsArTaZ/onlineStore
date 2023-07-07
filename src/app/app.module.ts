import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { OverlayModule } from '@angular/cdk/overlay';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CardShopComponent } from './components/card-shop/card-shop.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [AppComponent, HeaderComponent, CardShopComponent],
  imports: [BrowserModule, AppRoutingModule, FontAwesomeModule, OverlayModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
