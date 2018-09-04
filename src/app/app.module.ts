import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { AppComponent } from './app.component';
import { AddCreditCardComponent } from './components/add-credit-card/add-credit-card.component';
import { DisplayCreditCardsComponent } from './components/display-credit-cards/display-credit-cards.component';
import { HttpClientModule } from '@angular/common/http';
import {CreditCardService} from "./service/credit-card.service";

@NgModule({
  declarations: [
    AppComponent,
    AddCreditCardComponent,
    DisplayCreditCardsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [CreditCardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
