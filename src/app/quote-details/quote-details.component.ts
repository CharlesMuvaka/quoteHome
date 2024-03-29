import { Component, OnInit , Input, Output, EventEmitter} from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {
  @Input() quoteInfo:Quote;
  @Output() deleteGoal = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }
  goalRead(read:boolean){
    this.deleteGoal.emit(read);
  }

}
