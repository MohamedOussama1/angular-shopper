import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-counter-input',
  templateUrl: './counter-input.component.html',
  styleUrls: ['./counter-input.component.css']
})
export class CounterInputComponent {
  @Input()
  counterValue = 0;
  increment() : void{
    this.counterValue ++;
  }
  decrement() : void{
    this.counterValue --;
  }
}
