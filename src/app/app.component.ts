import { Component, VERSION } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  seconds = 10;
  isCounting = false;
  interval;
  name = "Angular " + VERSION.major;

  start() {
    if (!this.isCounting) {
      this.isCounting = true;
      console.log("started");
      const audio = new Audio();
      const source = document.createElement("source");
      source.setAttribute(
        "src",
        "https://raw.githubusercontent.com/raulmu/angular-stopwatch/master/src/assets/sounds/beep-start.mp3"
      );
      source.setAttribute("type", "audio/mpeg");
      audio.append(source);
      audio.load();
      audio.play();
      window.setTimeout(() => {
        this.interval = window.setInterval(() => this.toDo(), 1000);
      }, 3500);
    }
  }

  toDo() {
    if (!this.seconds) {      const audio = new Audio();
      const source = document.createElement("source");
      source.setAttribute(
        "src",
        "https://raw.githubusercontent.com/raulmu/angular-stopwatch/master/src/assets/sounds/trim-stop.mp3"
      );
      source.setAttribute("type", "audio/mpeg");
      audio.append(source);
      audio.load();
      audio.play();
      window.clearInterval(this.interval);
      this.seconds = 10;
      this.isCounting = false;
      console.log("finished");
    } else {
      console.log(this.seconds);
      this.seconds = this.seconds - 1;
    }
  }

  stop() {
    this.isCounting = false;
    window.clearInterval(this.interval);
    this.seconds = 10;
    console.log("stoped");
  }
}
