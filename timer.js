class Timer {
    #timer;
    #type;
    #dp;
    #UnitM;
    #startTime;
    #endTime;
    #paused;
    #pauseTime;
    #timerTimeout;
    #whenDone;

    constructor(unit = "s", dp = false) {
      this.#timer = null;
      this.#type = false;
      this.#dp = dp;
      switch (unit) {
        case "ms":
          this.#UnitM = 1;
          break;
        case "s":
          this.#UnitM = 0.001;
          break;
        case "m":
          this.#UnitM = 1 / 60000;
          break;
        case "h":
          this.#UnitM = 1 / 3600000;
          break;
        default:
          throw new Error("Invalid unit. Valid units are 'ms'(milliseconds)(native), 's'(seconds), 'm'(minutes), 'h'(hours).");
      }
    }
  
    // Method to start a stopwatch
    startStopwatch(dateObj = new Date()) {
      if (!(dateObj instanceof Date)) {
        throw new Error("Invalid date object.");
      }
      this.#startTime = dateObj.getTime();
      if (this.#type === "t") {
        clearTimeout(this.#timerTimeout);
      }
      this.#type = "sw";
      this.#paused = false;

      
    }
  
    // Method to start a timer
    startTimer(time = 0, whenDone = false) {
      if (typeof time !== 'number' || time < 0) {
        throw new Error("Invalid time. Time should be a non-negative number.");
      }
      if (whenDone && typeof whenDone !== 'function') {
        throw new Error("Invalid callback function.");
      }
      if (this.#type === "t") {
        clearTimeout(this.#timerTimeout);
      }
      let now = (new Date()).getTime();
      this.#endTime = Math.round(now + time / this.#UnitM);
      this.#type = "t";
      this.#whenDone = whenDone;
      this.#timerTimeout = setTimeout(whenDone, time / this.#UnitM);
      this.#paused = false;
    }
  
    // Method to get the current time
    getTime(timeNow = new Date()) {
      if (!(timeNow instanceof Date)) {
        throw new Error("Invalid date object.");
      }
      timeNow = timeNow.getTime();
      switch (this.#type) {
        case "sw":
          if (!this.#paused) {
            return this.#roundTo((timeNow - this.#startTime) * this.#UnitM);
          } else {
            return this.#roundTo((this.#pauseTime - this.#startTime) * this.#UnitM);
          }
        case "t":
          if (this.#paused) {
            return this.#roundTo((this.#endTime - this.#pauseTime) * this.#UnitM);
          }
          return this.#roundTo((this.#endTime - timeNow) * this.#UnitM);
        default:
          return 0;
      }
    }
  
    // Method to round the time to the specified decimal places
    #roundTo(num) {
      if (this.#dp === false) {
        return num;
      }
      return Math.round(num * 10 ** this.#dp) / 10 ** this.#dp;
    }
  
    pause() {
      if (this.#paused) {
        return;
      }
      this.#paused = true;
      this.#pauseTime = (new Date()).getTime();
      if (this.#type === "t") {
        clearTimeout(this.#timerTimeout);
      }
    }
  
    unpause() {
      if (!this.#paused) {
        return;
      }
      this.#paused = false;
      let unpauseTime = (new Date()).getTime();
  
      if (this.#type === "sw") {
        this.#startTime = this.#startTime + unpauseTime - this.#pauseTime;
      }
      if (this.#type === "t") {
        this.#endTime = this.#endTime + unpauseTime - this.#pauseTime;
        this.#timerTimeout = setTimeout(this.#whenDone, this.#endTime - unpauseTime);
      }
    }
    stop(){
      if (this.#type === "t") {
        clearTimeout(this.#timerTimeout);
      }
      this.#type = false;
    }
    isPaused(){
      return this.#paused;
    }
    
  }
  
  