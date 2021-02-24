import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-no-city-card',
  templateUrl: './no-city-card.component.html',
  styleUrls: ['./no-city-card.component.css']
})
export class NoCityCardComponent implements OnInit {
  @Input() public hasResult: boolean;

  @Input() private noResultFound: boolean;

  public constructor() { }

  public ngOnInit(): void { }
}

