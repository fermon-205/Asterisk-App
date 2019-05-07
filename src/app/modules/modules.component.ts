import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-modules',
  templateUrl: './modules.component.html',
  styleUrls: ['./modules.component.scss']
})
export class ModulesComponent implements OnInit {
  public contacts : any;
  public calls : any;

  constructor() {
    this.calls = [
      { name : 'jhon Doe', no : '8080948796', time : '1min 2 sec'},
      { name : 'jhon Doe', no : '8080948796', time : '1min 2 sec'},
      { name : 'User Doe', no : '8080948796', time : '1min 2 sec'},
      { name : 'jhon Doe', no : '8080948796', time : '1min 2 sec'},
      { name : 'Test Doe', no : '8080948796', time : '1min 2 sec'},
      { name : 'Test Doe', no : '8080948796', time : '1min 2 sec'},
      { name : 'Test Doe', no : '8080948796', time : '1min 2 sec'},
      { name : 'Test Doe', no : '8080948796', time : '1min 2 sec'},
      { name : 'Test Doe', no : '8080948796', time : '1min 2 sec'},
    ];

    this.contacts = [
      { name : 'jhon Doe' , image : '/assets/images/phone-icon.png'},
      { name : 'User Doe' , image : '/assets/images/phone-icon.png'},
      { name : 'jhon Doe' , image : '/assets/images/phone-icon.png'},
      { name : 'Test Doe' , image : '/assets/images/phone-icon.png'},
      { name : 'jhon Doe' , image : '/assets/images/phone-icon.png'},
      { name : 'jhon Doe' , image : '/assets/images/phone-icon.png'},
      { name : 'jhon Doe' , image : '/assets/images/phone-icon.png'},
      { name : 'jhon Doe' , image : '/assets/images/phone-icon.png'},
    ];
   }

  ngOnInit() {
  }

}
