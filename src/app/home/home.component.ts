import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  progressValue: number = 0;
  progressCompleted: boolean = true;
  buttonDisplay : boolean= false;
  progressDisplay : boolean = false;

  constructor(private  toaxt : ToastrService){}
  startProgress() {
    this.progressValue = 0;
    this.progressCompleted = false;
    this.buttonDisplay = true;
    const interval = setInterval(() => {
      this.progressValue += 1;
      if (this.progressValue >= 100) {
        clearInterval(interval);
        this.progressCompleted = true;
        this.toaxt.success('Message Success!', 'Title Success!');
      }
      this.buttonDisplay = false;
    }, 500);
  }

  progressBarDisplay(){
    if(this.progressCompleted == true){
      this.progressCompleted = false
      this.progressDisplay = false
    } else{
      this.progressCompleted = true
      this.progressDisplay = true
    }
  }
}
