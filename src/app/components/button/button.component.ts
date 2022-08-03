import { Component, Input, OnInit } from '@angular/core';
import { CaculatorService } from '../services/caculator.service';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() name ='';
  constructor(public srv: CaculatorService) { }

  ngOnInit(): void {
  }
  set(){
    this.srv.inputView +=this.name
    console.log(this.srv.inputView);
  }

}
