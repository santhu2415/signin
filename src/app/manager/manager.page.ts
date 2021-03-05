import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.page.html',
  styleUrls: ['./manager.page.scss'],
})
export class ManagerPage implements OnInit {

  constructor(private router: Router) { }

  tankersreading(){
    this.router.navigate(['/tankers-reading']);
  }
  Addempoly(){
    this.router.navigate(['/addemploy']);
  } 
  creditorslist(){
this.router.navigate(['/creditors-list'])
  }
  invoicepage(){
    this.router.navigate(['/invoice-page'])
  }
  ngOnInit() {
  }

}
