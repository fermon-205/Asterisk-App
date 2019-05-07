import { Component, OnInit, Input, Output, NgModule,  ElementRef, HostListener } from '@angular/core';
@Component({
  selector: 'app-call-now',
  templateUrl: './call-now.component.html',
  styleUrls: ['./call-now.component.scss']
})
export class CallNowComponent implements OnInit {
  public value : any = '';
  constructor() { 

  }

  
  dial(data){
    this.value = this.value + data;
    
  }

  deleteNo(){
   this.value = this.value.slice(0, -1);
  }
 
  ngOnInit() {
  }

}
