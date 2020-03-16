import { Component, Input } from '@angular/core';

@Component({
  selector: 'message',
  templateUrl: './message.html',
  styleUrls: [
    './message.scss'
  ]
})
export class MessageComponent {

  @Input() message: string;

  constructor (
  ) {}

}
