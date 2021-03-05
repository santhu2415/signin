import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  email:string; 
  pass:string;
  constructor(private router: Router) {}


login(){
  console.log('email:'+this.email);
  console.log('password:'+this.pass);
  this.router.navigate(['/login'])
}}