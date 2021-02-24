import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public time: string;
  private id: any;

  constructor() { }

  ngOnInit(): void {
    this.time = new Date().toTimeString();
    setTimeout(() => {
      this.id = setInterval(() => {
        this.time = new Date().toTimeString();
      }, 30000);
    }, 30000 - (Date.now() % 30000));
  }

  ngOnDestroy(): void {
    if (this.id) clearInterval(this.id);
  }
}
