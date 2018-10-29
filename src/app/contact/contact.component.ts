import { Component, OnInit } from '@angular/core';
import { PreloadingStrategy } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
 
})
export class ContactComponent implements OnInit {

  info = {
  name:'pradnya'
  }
  constructor() { }

  ngOnInit() {
  }

}
