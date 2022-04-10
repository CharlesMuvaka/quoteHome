import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'quoteAge'
})
export class QuoteAgePipe implements PipeTransform {

  transform(value: any):number {
    let today: Date = new Date();
    let todayActualDate:any = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    var dateDiff = Math.abs(value - todayActualDate);
    const daySecs = 86400;
    let datediffToSecs = dateDiff*0.001;
    let ageQuoteCounter = datediffToSecs/daySecs;

    if(ageQuoteCounter > 0 && value > ageQuoteCounter){
      return ageQuoteCounter;
      console.log(ageQuoteCounter);
    }else{
      return 0;

    }

    
  }

}
