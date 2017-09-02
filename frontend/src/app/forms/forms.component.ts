import { Component, OnInit } from '@angular/core'
import { NgModel,FormsModule } from '@angular/forms'
import { FormData,FormOptions } from '../Interfaces/form-data'
@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  data: FormData = {
    textdata:'text box value',
    chkdata: true,
    radiodata: 'C',
    dddata:'2',
    areadata:'text area value'
  };
  ddlOptions: FormOptions[] = [{
    value:'1',
    text:'Option 1'
  },{
    value:'2',
    text:'Option 2'
  }];
  constructor() { }
  chkOptions: FormOptions[] = [{
    value:'A',
    text:'Option A'
  },{
    value:'B',
    text:'Option B'
  }];
  radioOptions: FormOptions[] = [{
    value:'X',
    text:'Option X'
  },{
    value:'Y',
    text:'Option Y'
  }]
  ngOnInit() {
  }
  
}
