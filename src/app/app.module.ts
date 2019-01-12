import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NamesComponent } from './names/names.component';
import { NameTagComponent } from './name-tag/name-tag.component';
import { StocksComponent } from './stocks/stocks.component';
import { MutualFundsComponent } from './mutual-funds/mutual-funds.component';
import { HighlightDirective } from './highlight.directive';
import { StockServiceService } from './stock-service.service';
import { DateFormatterPipe } from './date-formatter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NamesComponent,
    NameTagComponent,
    StocksComponent,
    MutualFundsComponent,
    HighlightDirective,
    DateFormatterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [StockServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
