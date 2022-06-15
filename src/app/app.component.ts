import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'timer';
  seconds = 0;
  minutes = 0;
  started = false;
  myInt: any = null;
  isSingleClick: Boolean = true;

  minutesCheck() {
    if (this.seconds == 60) {
      this.minutes += 1
      this.seconds = 0
    }
  }

  timerStatus(stat: boolean) {
    this.started = stat
    clearInterval(this.myInt)
    if (this.started == true) {
      this.myInt = setInterval(() => {
        this.seconds += 1
        console.log(this.seconds)
        this.minutesCheck()
      }, 1000)
    }
    else if (this.started == false) {
      clearInterval(this.myInt)
      this.seconds = 0
      this.minutes = 0
      console.log(this.seconds)
    }
  };


  callForClick() {
    this.isSingleClick = true;
    setTimeout(() => {
      if (this.isSingleClick) {
        return
      }
    }, 500)
  }
  callForDblClick() {
    this.isSingleClick = false;
    console.log("double")
    clearInterval(this.myInt)
    this.started = false
  }

  resetTimer(){
    clearInterval(this.myInt)
    this.seconds = 0
    this.minutes = 0
    this.timerStatus(true)
  }
}
