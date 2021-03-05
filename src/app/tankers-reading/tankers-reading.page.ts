import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tankers-reading',
  templateUrl: './tankers-reading.page.html',
  styleUrls: ['./tankers-reading.page.scss'],
})
export class TankersReadingPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
