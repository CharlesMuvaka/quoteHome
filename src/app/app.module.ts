import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';




import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuoteComponent } from './quote/quote.component';
import { FormComponent } from './form/form.component';
import { QuoteDetailsComponent } from './quote-details/quote-details.component';
import { QuoteAgePipe } from './quote-age.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SelectQuoteWithHighVotesDirective } from './select-quote-with-high-votes.directive';
import { ChangeColorDirective } from './change-color.directive';
import { DownChangeColorDirective } from './down-change-color.directive';

@NgModule({
  declarations: [
    AppComponent,
    QuoteComponent,
    FormComponent,
    QuoteDetailsComponent,
    QuoteAgePipe,
    SelectQuoteWithHighVotesDirective,
    ChangeColorDirective,
    DownChangeColorDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    FontAwesomeModule, 
    
  
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
