import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cashier',
  templateUrl: './cashier.page.html',
  styleUrls: ['./cashier.page.scss'],
})
export class CashierPage implements OnInit {

  constructor(private router: Router) { }
pump(){
  this.router.navigate(['/pump-readings'])
}
sales(){
  this.router.navigate(['/sales-breaks'])
}
  ngOnInit() {
  }

}
