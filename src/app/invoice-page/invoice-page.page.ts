import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-invoice-page',
  templateUrl: './invoice-page.page.html',
  styleUrls: ['./invoice-page.page.scss'],
})
export class InvoicePagePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
