import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-message-card',
  templateUrl: './message-card.component.html',
  styleUrls: ['./message-card.component.scss']
})
export class MessageCardComponent implements OnInit {

  @Input() message: IMessage;
  @Input() author: IUser;

  constructor() { }

  ngOnInit(): void {
  }

}
