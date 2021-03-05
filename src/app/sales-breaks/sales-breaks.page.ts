import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sales-breaks',
  templateUrl: './sales-breaks.page.html',
  styleUrls: ['./sales-breaks.page.scss'],
})
export class SalesBreaksPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
