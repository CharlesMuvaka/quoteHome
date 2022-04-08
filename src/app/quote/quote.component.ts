import { Component, OnInit,} from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  
  quotes:Quote[] = [
    new Quote('Charles Muvaka','Bob Marley', ' True Friendsip', 'You find strength in knowing you have a true friend and possibly a soul mate who will remain loyal to the end. Life seems completely different, exciting and worthwhile. Your only hope and security is in knowing that they are a part of your life.'),
    new Quote('Charles Muvaka','Bob Marley', ' Wealth and Money', 'Some of us are very poor that the only thing we have is money.'),
    new Quote('Charles Muvaka','Bob Marley', ' True Friendsip', 'You find strength in knowing you have a true friend and possibly a soul mate who will remain loyal to the end. Life seems completely different, exciting and worthwhile. Your only hope and security is in knowing that they are a part of your life.'),
    new Quote('Charles Muvaka','Bob Marley', ' True Friendsip', 'You find strength in knowing you have a true friend and possibly a soul mate who will remain loyal to the end. Life seems completely different, exciting and worthwhile. Your only hope and security is in knowing that they are a part of your life.'),
  ];

  constructor() { }

  ngOnInit(): void {
    console.log(Quote)
  }

}
