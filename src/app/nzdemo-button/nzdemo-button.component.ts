import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nzdemo-button',
  templateUrl: './nzdemo-button.component.html',
  styleUrls: ['./nzdemo-button.component.css']
})
export class NzdemoButtonComponent implements OnInit {

  size = 'default';

  isLoadingOne = false;
  isLoadingTwo = false;

  constructor() { }

  ngOnInit() {
  }

  loadOne = (value) => {
    this.isLoadingOne = true;
    setTimeout(_ => {
      this.isLoadingOne = false;
    }, 2000);
  }

  loadTwo = (value) => {
    this.isLoadingTwo = true;
    setTimeout(_ => {
      this.isLoadingTwo = false;
    }, 2000);
  }

}
