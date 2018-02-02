import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nzdemo-dropdown',
  templateUrl: './nzdemo-dropdown.component.html',
  styleUrls: ['./nzdemo-dropdown.component.css']
})
export class NzdemoDropdownComponent implements OnInit {

  visible = false;

  constructor() { }

  ngOnInit() {
  }

  log(data) {
    console.log(data);
  }

}
