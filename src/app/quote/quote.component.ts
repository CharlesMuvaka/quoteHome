import { Component, OnInit,} from '@angular/core';
import { Quote } from '../quote'
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { faThumbsDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  thumbsUp = faThumbsUp;
  thumbsDown = faThumbsDown;

  
  quotes:Quote[] = [
    new Quote('Charles Muvaka','Sheldon Cooper', ' True Friendsip', 'You find strength in knowing you have a true friend and possibly a soul mate who will remain loyal to the end. Life seems completely different, exciting and worthwhile. Your only hope and security is in knowing that they are a part of your life.',new Date(2021,0,15)),
    new Quote('Charles Muvaka','Bob Marley', ' Wealth and Money', 'Some of us are very poor that the only thing we have is money.',new Date(2022,0,16)),
    new Quote('Charles Muvaka','Jim Rohn', 'Pain', "There are two types of pain you will go through in life: the pain of discipline and the pain of regret. Discipline weighs ounces, while regret weighs tons.",new Date(2021,9,25)),
  ];

  myQuote:number[] = this.quotes.map((quote) => {return quote.upVote});
  changeColor = Math.max(...this.myQuote);
  

  


  constructor() { }

  ngOnInit(): void {
    console.log(Quote)
  }

  toggleQuoteDetails(index:number){
    this.quotes[index].showDetails = !this.quotes[index].showDetails;
  }

  goalDeleted(goalRead:boolean,index:number){
    if(goalRead){
      this.quotes.splice(index, 1);
    }
    
  }

  pushQuote(newQuote:Quote){
    this.quotes.push(newQuote);
  }
  increaseVote(index:number){
    this.quotes[index].upVote = this.quotes[index].upVote +1;
    


    
  }
  decreaseVote(index:number){
    this.quotes[index].downVote = this.quotes[index].downVote +1;
    
  }
  

  
}
