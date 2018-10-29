import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styles: []
})
export class AboutComponent implements OnInit {


  private actualAmountInUSD = 40000;
  Num1: number = 0.1415927;
  Num2 :number = 2.67;

  get amount()
  {
    return this.INR ? this.actualAmountInUSD*65 : this.actualAmountInUSD
  }
  INR = true

  get format(){
    return  this.INR ? 'INR' : 'USD'
  }

  toggleINRandUSd()
  {
    this.INR = !this.INR
  }
  constructor() { }
  ngOnInit() {
  }

}
