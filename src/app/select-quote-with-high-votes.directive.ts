import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appSelectQuoteWithHighVotes]'
})
export class SelectQuoteWithHighVotesDirective {

  constructor(private quoteVotedHigh:ElementRef) { 
    quoteVotedHigh.nativeElement.style.color = 'white';
  }

}
