import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-demo-page',
  templateUrl: './demo-page.component.html',
  styleUrls: ['./demo-page.component.css']
})
export class DemoPageComponent implements OnInit {
  @Input() title: string;
  constructor() { }

  ngOnInit() {
  }

}
