import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quotes-details',
  templateUrl: './quotes-details.component.html',
  styleUrls: ['./quotes-details.component.css']
})
export class QuotesDetailsComponent implements OnInit {

  @Input()quote: Quote;
  @Output()isComplete = new EventEmitter<boolean>();

  upvote = 0;
  downvote = 0;
  upVote() {
     this.upvote = this.upvote + 1;
  }
  downVote() {
    this.downvote = this.downvote + 1;
    }

  deleteQuote(complete: boolean) {
    this.isComplete.emit(complete);
  }
  constructor() { }

  ngOnInit() {
  }

}
