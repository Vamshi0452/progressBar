import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-start-button',
  templateUrl: './start-button.component.html',
  styleUrls: ['./start-button.component.scss']
})
export class StartButtonComponent {
  @Output() start = new EventEmitter<void>();
  @Output() dataEmitter = new EventEmitter<string>();

  sendDataToComponentB() {
    const dataToSend = 'Display';
    this.dataEmitter.emit(dataToSend);
  }

  onStartClick() {
    this.start.emit();
    this.sendDataToComponentB();
  }
}
