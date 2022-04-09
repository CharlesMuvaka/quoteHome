export class Quote {
    upVote:number;
    downVote:number;
    showDetails:boolean;

    constructor(public quotePoster:string, public quoteAuthor:string, public quoteName:string, public quoteDesc:string, public created:Date){
        this.upVote = 0;
        this.downVote = 0;
        this.showDetails = false;
    }
}
