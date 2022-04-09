import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-contact-card',
  templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.css'],
})
export class ContactCardComponent implements OnInit {
  @Input() bgcolor!: string;
  @Input() name!: string;
  @Input() date!: string;
  @Input() msg!: string;
  @Input() unreaddisplay!: string;
  @Input() bindisplay!: string;

  constructor() {}

  ngOnInit(): void {}
}
