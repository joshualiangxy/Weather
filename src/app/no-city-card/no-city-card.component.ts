import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-no-city-card',
  templateUrl: './no-city-card.component.html',
  styleUrls: ['./no-city-card.component.css']
})
export class NoCityCardComponent implements OnInit {
  @Input() hasResult: boolean;
  @Input() noResultFound: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
