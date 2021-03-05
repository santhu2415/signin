import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pump-readings',
  templateUrl: './pump-readings.page.html',
  styleUrls: ['./pump-readings.page.scss'],
})
export class PumpReadingsPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
