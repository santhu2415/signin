import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-creditors-list',
  templateUrl: './creditors-list.page.html',
  styleUrls: ['./creditors-list.page.scss'],
})
export class CreditorsListPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
