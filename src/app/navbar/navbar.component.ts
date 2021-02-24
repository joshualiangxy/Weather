import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public time: string;

  private id: ReturnType<typeof setInterval>;

  public constructor() { }

  public ngOnInit(): void {
    this.time = new Date().toTimeString();
    const thirtySeconds: number = 30000;

    setTimeout(() => {
      this.id = setInterval(() => {
        this.time = new Date().toTimeString();
      }, thirtySeconds);
    }, thirtySeconds - (Date.now() % thirtySeconds));
  }

  public ngOnDestroy(): void {
    if (this.id) clearInterval(this.id);
  }
}

