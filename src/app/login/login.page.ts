import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private router: Router) { }


cash(){
  this.router.navigate(['/cash']);
}
pricesandstocks(){
  this.router.navigate(['/pricesandstocks'])
}
manager(){
  this.router.navigate(['/manager']);
}
cashier(){
  this.router.navigate(['/cashier']);
}

  ngOnInit() {
  }

}
