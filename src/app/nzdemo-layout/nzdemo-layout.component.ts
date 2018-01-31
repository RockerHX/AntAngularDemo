import { Component, OnInit } from '@angular/core';

import { MENUS } from '../models/menu';

@Component({
  selector: 'app-nzdemo-layout',
  templateUrl: './nzdemo-layout.component.html',
  styleUrls: ['./nzdemo-layout.component.css']
})
export class NzdemoLayoutComponent implements OnInit {

  menus = MENUS;

  constructor() { }

  ngOnInit() {
  }

}
