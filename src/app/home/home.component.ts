import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  birthday = new Date(2018, 9, 30);
  ngOnInit(){}
openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}
 closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

}
