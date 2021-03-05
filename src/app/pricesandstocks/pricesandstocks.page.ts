import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pricesandstocks',
  templateUrl: './pricesandstocks.page.html',
  styleUrls: ['./pricesandstocks.page.scss'],
})
export class PricesandstocksPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
