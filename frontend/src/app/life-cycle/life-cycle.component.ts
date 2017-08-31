import { Component, OnInit, OnChanges,SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms'
@Component({
  selector: 'app-life-cycle',
  templateUrl: './life-cycle.component.html',
  styleUrls: ['./life-cycle.component.css']
})
export class LifeCycleComponent implements OnInit,OnChanges {

  constructor() { }

  inputValue:string = 'Enter Here';
  ngOnInit() {
    console.log('ON INIT');
  }

  ngOnChanges(changes:SimpleChanges){
    console.log('ON Changes ');
  }
}
