import { Component, OnInit } from '@angular/core';
import { Element } from '../Interfaces/Score.js';
import {ElementService} from '../Services/element.service';
@Component({
  selector: 'app-element',
  templateUrl: './element.component.html',
  styleUrls: ['./element.component.css']
})
export class ElementComponent implements OnInit {

  constructor(private eleService:ElementService) { }

  ngOnInit() {
    this.loadElementData();
  }

  loadElementData():void {
    this.eleService.getElementData().subscribe(ele => this.eleData=ele);
 }

  eleData:Element[];
  data:Element[] = [ {
    $id: "1",
    Name:"Person",
    Count:1
  },
  {
    $id: "1",
    Name:"Person2",
    Count:2
  }]
}
