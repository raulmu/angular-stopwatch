import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  seconds = 10;
  isCounting = false;
  interval;
  name = 'Angular ' + VERSION.major;
  
  start() {
    if(!this.isCounting){
      this.isCounting=true;
      console.log('has started');
      // let audio = new Audio();
      // audio.src = '../assets/sounds/beep-start.ogg';
      // source.setAttribute('src', 'AUDIO_URL');
      const audio = new Audio();
      const source = document.createElement('source');

      source.setAttribute('src', '../assets/sounds/1.mp3');
      source.setAttribute('type', 'audio/mpeg');

      audio.append(source);
      audio.play();


      // audio.setAttribute('type', 'audio/ogg');
      // audio.load();
      // audio.play();
      this.interval = window.setInterval(
        () => this.toDo(), 1000
        );
    }
  }

  toDo(){
    if(!this.seconds) {
      window.clearInterval(this.interval);
      this.seconds = 10;
      this.isCounting = false;
    } else {
      console.log(this.seconds);
      this.seconds=this.seconds - 1;
    }
  }


}
