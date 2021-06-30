import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  tick = 0;
  constructor() { }

  ngOnInit(): void {
    setInterval(() =>{
      this.tick++;
    } , 1000);
  }

}
