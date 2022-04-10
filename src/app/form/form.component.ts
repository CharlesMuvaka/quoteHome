import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { Quote} from '../quote'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  

  userQuote:Quote = new Quote('','','','',new Date())
  @Output() submitQuote = new EventEmitter<Quote>()

  constructor() { }

  ngOnInit(): void {
  }

  passUserQuote(){
    
      this.submitQuote.emit(this.userQuote);

    
    
    
    
  }
  

}
