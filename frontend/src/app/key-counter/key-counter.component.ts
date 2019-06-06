import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-key-counter',
  templateUrl: './key-counter.component.html',
  styleUrls: ['./key-counter.component.styl']
})
export class KeyCounterComponent implements OnInit {
  keyhitsJosh = 0;
  keyhitsDario = 0;
  constructor() { }

  ngOnInit() {
  }
}
