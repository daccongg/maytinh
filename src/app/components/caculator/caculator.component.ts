import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CaculatorService } from '../services/caculator.service';

@Component({
  selector: 'app-caculator',
  templateUrl: './caculator.component.html',
  styleUrls: ['./caculator.component.scss']
})
export class CaculatorComponent implements OnInit {

  result = '0';

  @Output() newItemEvent = new EventEmitter<string>();
  constructor(public srv: CaculatorService) {
  }

  getNumber(value: any): void {
    let data = parseFloat(value);
    console.log(value);
    return value;
  }

  ngOnInit(): void {
  }

  cal() {
    try {
      let result = this.srv.inputView;
      let str = "12/5*9+9.4*2"
      let res2 = (new Function('return ' + result)())
      if (result != undefined) {
        this.srv.inputView = res2;
        console.log(res2)
        if (res2 == undefined) {
          this.srv.inputView = result;
        }
      }
    } catch (error) {
      this.srv.inputView = ('error');
    }
  }
  clear() {
    this.srv.inputView = '';
  }
}
